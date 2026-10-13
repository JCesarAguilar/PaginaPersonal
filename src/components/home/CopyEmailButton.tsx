"use client";

import { useState } from "react";
import { SITE } from "@/src/data/site";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Si el navegador no deja copiar, el correo igual está visible y seleccionable.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`h-9 rounded-full border px-4 font-mono text-xs transition-colors ${
        copied
          ? "border-green-main text-green-main"
          : "border-white/20 text-white-smoke hover:border-green-main"
      }`}
    >
      {copied ? "Copiado ✓" : "Copiar"}
    </button>
  );
}
