"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import SocialIcon from "@/src/components/common/SocialIcon";
import { SITE } from "@/src/data/site";
import { getNavItems } from "@/src/helpers/publicNavItems";
import { getContent, type Locale } from "@/src/i18n/config";

export default function HamburguerMenu({ locale }: { locale: Locale }) {
  const { SITE_TEXT, UI } = getContent(locale);
  const publicNavItems = getNavItems(locale);
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
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? UI.nav.closeMenu : UI.nav.openMenu}
        className="relative z-50 -mr-2 inline-flex h-11 w-11 items-center justify-center text-fog transition-colors hover:text-white-smoke"
      >
        {open ? (
          <X className="h-6 w-6" strokeWidth={1.5} />
        ) : (
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        )}
      </button>

      {/* Mismo lenguaje visual que la columna izquierda de escritorio */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col justify-between bg-black-background px-6 pb-12 pt-32"
      >
        <nav aria-label={UI.nav.mainLabel}>
          <ul className="flex flex-col gap-7">
            {publicNavItems.map((item) => (
              <li key={item.route}>
                <a
                  href={item.route}
                  onClick={close}
                  className="group flex items-center gap-4 py-1 font-mono text-sm uppercase tracking-[0.2em] text-fog-dim transition-colors hover:text-white-smoke"
                >
                  <span className="h-px w-8 bg-fog-dim transition-all duration-300 group-hover:w-16 group-hover:bg-white-smoke" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <ul className="flex items-center gap-5">
            {SITE.social.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-fog transition-colors hover:text-green-main"
                >
                  <SocialIcon name={link.icon} />
                  <span className="sr-only">
                    {link.name} {UI.newTab}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE_TEXT.cvUrl}
            download
            onClick={close}
            className="inline-flex items-center gap-2 rounded-full border border-green-main/60 px-4 py-2 font-mono text-sm text-green-main transition-colors hover:bg-green-main hover:text-black-background"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {UI.downloadCv}
          </a>
        </div>
      </div>
    </div>
  );
}
