"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/src/app/actions/contact";
import { SITE } from "@/src/data/site";

const initialState: ContactState = { status: "idle" };

const label = "font-mono text-[11px] uppercase tracking-[0.16em]";
const field =
  "w-full rounded-xl border bg-white/[0.03] px-4 text-[15px] text-white-smoke placeholder:text-fog-dim outline-none transition-colors focus:border-green-main";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContact,
    initialState,
  );

  const err = state.errors ?? {};
  const v = state.values;

  // Estado 3: enviado. Reemplaza al formulario.
  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 rounded-2xl border border-green-main/35 bg-green-main/5 p-8 text-left"
      >
        <h3 className="text-xl font-bold text-white-smoke">
          Mensaje recibido.
        </h3>
        <p className="text-fog">
          Gracias, {v?.name}. Te respondo en menos de 24 horas a {v?.email}.
        </p>
      </div>
    );
  }

  const border = (name: keyof NonNullable<ContactState["errors"]>) =>
    err[name] ? "border-[#ff8a7a]" : "border-white/15";

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0e1416] p-6 md:p-9 text-left"
    >
      <div>
        <h3 className="text-xl font-bold text-white-smoke">
          Envíame un mensaje
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="c-name" className={`${label} text-fog`}>
            Nombre
          </label>
          <input
            id="c-name"
            name="name"
            autoComplete="name"
            defaultValue={v?.name}
            placeholder="Ana Torres"
            aria-invalid={!!err.name}
            aria-describedby={err.name ? "c-name-err" : undefined}
            className={`${field} h-12 ${border("name")}`}
          />
          {err.name && (
            <p id="c-name-err" className="text-sm text-[#ff8a7a]">
              {err.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="c-email" className={`${label} text-fog`}>
            Correo
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v?.email}
            placeholder="ana@empresa.com"
            aria-invalid={!!err.email}
            aria-describedby={err.email ? "c-email-err" : undefined}
            className={`${field} h-12 ${border("email")}`}
          />
          {err.email && (
            <p id="c-email-err" className="text-sm text-[#ff8a7a]">
              {err.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="c-msg" className={`${label} text-fog`}>
          Mensaje
        </label>
        <textarea
          id="c-msg"
          name="message"
          rows={5}
          maxLength={1000}
          defaultValue={v?.message}
          placeholder="Cuéntame del rol o del proyecto: qué buscan resolver y para cuándo."
          aria-invalid={!!err.message}
          aria-describedby={err.message ? "c-msg-err" : undefined}
          className={`${field} resize-none py-3 leading-relaxed ${border("message")}`}
        />
        {err.message && (
          <p id="c-msg-err" className="text-sm text-[#ff8a7a]">
            {err.message}
          </p>
        )}
      </div>

      {/* Trampa para bots: invisible para personas */}
      <div aria-hidden="true" className="hidden">
        <label>
          Empresa <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Estado 4: falló el envío */}
      {state.status === "failed" && (
        <p
          role="alert"
          className="rounded-xl border border-[#ff8a7a]/35 bg-[#ff8a7a]/5 p-4 text-sm text-fog"
        >
          No se pudo enviar. Tu mensaje sigue escrito: inténtalo de nuevo o
          escríbeme a{" "}
          <span className="text-white-smoke select-all">{SITE.email}</span>.
        </p>
      )}

      {/* Estado 2: enviando */}
      <button
        type="submit"
        disabled={pending}
        className="flex h-13 items-center justify-center gap-2 rounded-full bg-green-main font-mono text-sm font-bold text-black-background transition-opacity hover:opacity-90 disabled:opacity-55"
      >
        {pending ? "Enviando…" : "Enviar mensaje →"}
      </button>
    </form>
  );
}
