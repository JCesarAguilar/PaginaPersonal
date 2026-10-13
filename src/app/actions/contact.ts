"use server";

export type ContactState = {
  status: "idle" | "error" | "success" | "failed";
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string; reason: string };
};

const REASONS = ["Oferta de empleo", "Proyecto freelance", "Otro"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    reason: String(formData.get("reason") ?? "Otro"),
  };

  // Trampa para bots: este campo está oculto, una persona nunca lo llena.
  if (formData.get("company")) return { status: "success", values };

  // Validación en el servidor: la del navegador se puede saltar.
  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Escribe tu nombre.";
  if (!values.email.includes("@"))
    errors.email = "Falta la @. Ejemplo: ana@empresa.com";
  else if (!EMAIL_RE.test(values.email))
    errors.email = "Revisa el correo. Ejemplo: ana@empresa.com";
  if (values.message.length < 10)
    errors.message = "Cuéntame un poco más (mínimo 10 caracteres).";
  else if (values.message.length > 1000)
    errors.message = "Máximo 1000 caracteres.";
  if (!REASONS.includes(values.reason)) values.reason = "Otro";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portafolio <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL,
        reply_to: values.email,
        subject: `[${values.reason}] ${values.name}`,
        text: `${values.message}\n\n— ${values.name} <${values.email}>`,
      }),
    });
    if (!res.ok) throw new Error(`Resend respondió ${res.status}`);
    return { status: "success", values };
  } catch (err) {
    console.error("sendContact:", err);
    return { status: "failed", values };
  }
}
