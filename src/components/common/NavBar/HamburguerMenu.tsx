"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { publicNavItems } from "@/src/helpers/publicNavItems";

export default function HamburguerMenu() {
  const [open, setOpen] = useState(false);

  // Solo mientras el menú está abierto: Escape lo cierra y el fondo no scrollea.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    // Limpieza: se ejecuta al cerrar el menú o al desmontar el componente.
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-green-main/40 text-green-main"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-black-background/95 backdrop-blur-sm px-6 pt-28 pb-10"
      >
        <nav aria-label="Menú principal" className="flex flex-col gap-6">
          {publicNavItems.map((item) => (
            <a
              key={item.route}
              href={item.route}
              onClick={close}
              className="font-mono text-2xl text-white-smoke hover:text-green-main transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="/CV_Julio_Aguilar.pdf"
          download
          onClick={close}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-main text-black-background font-mono text-sm font-bold"
        >
          <Download className="h-4 w-4" />
          Descargar CV
        </a>
      </div>
    </div>
  );
}
