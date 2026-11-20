import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import CursorSpotlight from "@/src/components/common/CursorSpotlight";
import SocialIcon from "@/src/components/common/SocialIcon";
import { ARCHIVE } from "@/src/data/archive";
import { SITE } from "@/src/data/site";
import { UI } from "@/src/data/ui";

export const metadata: Metadata = {
  title: UI.archive.title,
  description: UI.archive.description,
  alternates: { canonical: "/archivo" },
};

// "https://www.ejemplo.com/ruta" -> "ejemplo.com"
const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function ArchivePage() {
  return (
    <>
      <CursorSpotlight />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-6xl px-6 py-16 md:px-12 lg:py-24">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-sm text-green-main"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {SITE.name}
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold text-white-smoke sm:text-5xl">
          {UI.archive.title}
        </h1>
        <p className="mt-3 text-fog">{UI.archive.description}</p>

        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-white/10 bg-black-background/85 backdrop-blur">
            <tr className="font-mono text-xs uppercase tracking-[0.15em] text-white-smoke">
              <th className="py-4 pr-6">{UI.archive.year}</th>
              <th className="py-4 pr-6">{UI.archive.project}</th>
              <th className="hidden py-4 pr-6 lg:table-cell">
                {UI.archive.madeAt}
              </th>
              <th className="hidden py-4 pr-6 lg:table-cell">
                {UI.archive.builtWith}
              </th>
              <th className="hidden py-4 sm:table-cell">{UI.archive.link}</th>
            </tr>
          </thead>
          <tbody>
            {ARCHIVE.map((item) => {
              const main = item.liveUrl ?? item.codeUrl;
              return (
                <tr
                  key={item.title}
                  className="border-b border-white/5 last:border-none"
                >
                  <td className="py-4 pr-6 align-top font-mono text-sm text-fog-dim">
                    {item.year}
                  </td>
                  <td className="py-4 pr-6 align-top font-semibold leading-snug text-white-smoke">
                    {/* En móvil el nombre es el enlace; en pantallas grandes hay columna propia */}
                    {main ? (
                      <a
                        href={main}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-1 hover:text-green-main sm:pointer-events-none sm:hover:text-white-smoke"
                      >
                        {item.title}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 shrink-0 sm:hidden"
                          aria-hidden="true"
                        />
                        <span className="sr-only">{UI.newTab}</span>
                      </a>
                    ) : (
                      item.title
                    )}
                  </td>
                  <td className="hidden py-4 pr-6 align-top text-sm text-fog lg:table-cell">
                    {item.madeAt}
                  </td>
                  <td className="hidden py-4 pr-6 align-top lg:table-cell">
                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label={UI.techList}
                    >
                      {item.stack.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-green-main/10 px-3 py-1 font-mono text-[11px] text-green-main"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top sm:table-cell">
                    <div className="flex items-center gap-4">
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 whitespace-nowrap text-sm text-fog transition-colors hover:text-green-main"
                        >
                          {host(item.liveUrl)}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="sr-only">{UI.newTab}</span>
                        </a>
                      )}
                      {item.codeUrl && (
                        <a
                          href={item.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                          className="text-fog transition-colors hover:text-green-main"
                        >
                          <SocialIcon name="github" className="h-5 w-5" />
                          <span className="sr-only">
                            {UI.codeLinkLabel(item.title)}
                          </span>
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
