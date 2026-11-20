"use client";

import Link from "next/link";
import HamburguerMenu from "./HamburguerMenu";
import { SITE } from "@/src/data/site";
import { UI } from "@/src/data/ui";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-20 py-4 bg-black-background">
      {/* Marca: vuelve al inicio */}
      <Link
        href="/"
        aria-label={`${SITE.name}, ${UI.nav.goHome}`}
        className="relative z-50 flex items-center gap-3"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-green-main font-mono text-sm font-bold text-green-main">
          {SITE.initials}
        </span>
        <span className="hidden sm:inline font-mono text-sm text-white-smoke">
          {SITE.name}
        </span>
      </Link>

      {/* Móvil: menú hamburguesa a la derecha */}
      <HamburguerMenu />
    </header>
  );
}
