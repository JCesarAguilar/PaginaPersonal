"use client";

import Link from "next/link";
import HamburguerMenu from "./HamburguerMenu";
import LangSwitch from "@/src/components/common/LangSwitch";
import { SITE } from "@/src/data/site";
import { getContent, localePath, type Locale } from "@/src/i18n/config";

export default function NavBar({ locale }: { locale: Locale }) {
  const { UI } = getContent(locale);
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-20 py-4 bg-black-background">
      {/* Marca: vuelve al inicio */}
      <Link
        href={localePath(locale, "/")}
        className="relative z-50 flex items-center gap-3"
      >
        {/* Logo estilo terminal, igual que el favicon. El cursor queda fijo:
            solo parpadea el del nombre, para no tener dos a la vez. */}
        <span className="flex h-10 items-end pb-2 font-mono text-xl font-extrabold leading-none tracking-tight text-white-smoke">
          {SITE.initials}
          <span
            aria-hidden="true"
            className="mb-px ml-0.5 h-1 w-2.5 bg-green-main"
          />
        </span>
        <span className="sr-only sm:not-sr-only font-mono text-sm text-white-smoke">
          {SITE.name}
        </span>
        <span className="sr-only">, {UI.nav.goHome}</span>
      </Link>

      {/* Móvil: idioma y menú hamburguesa a la derecha */}
      {/* Sin z-index propio: así el menú abierto queda debajo de la marca y del idioma */}
      <div className="flex items-center gap-5">
        <LangSwitch locale={locale} path="/" className="relative z-50" />
        <HamburguerMenu locale={locale} />
      </div>
    </header>
  );
}
