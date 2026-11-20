"use client";

import { useEffect, useMemo, useState } from "react";
import { Download } from "lucide-react";
import SocialIcon from "@/src/components/common/SocialIcon";
import LangSwitch from "@/src/components/common/LangSwitch";
import { SITE } from "@/src/data/site";
import { getNavItems, toSectionId } from "@/src/helpers/publicNavItems";
import { getContent, type Locale } from "@/src/i18n/config";

// Columna izquierda: quién eres, navegación con la sección activa y enlaces.
// En escritorio queda fija mientras la columna derecha hace scroll.
export default function ProfileAside({ locale }: { locale: Locale }) {
  const { HERO, SITE_TEXT, UI } = getContent(locale);
  const publicNavItems = useMemo(() => getNavItems(locale), [locale]);
  const [active, setActive] = useState<string>(
    toSectionId(publicNavItems[0].route),
  );

  // Marca en el menú la sección que está en pantalla.
  useEffect(() => {
    const sections = publicNavItems
      .map((item) => document.getElementById(toSectionId(item.route)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [publicNavItems]);

  return (
    <header className="relative flex flex-col justify-between gap-12 pt-28 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:py-24">
      <div className="relative">
        <p className="font-mono text-sm text-fog">{HERO.greeting}</p>
        <h1 className="mt-2 font-display text-4xl font-bold leading-[1.05] text-white-smoke sm:text-5xl">
          {SITE.name}
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-green-main">
          {HERO.title}
        </p>
        <p className="mt-5 max-w-sm leading-relaxed text-fog">{HERO.tagline}</p>

        <nav
          aria-label={UI.nav.sectionsLabel}
          className="mt-14 hidden lg:block"
        >
          <ul className="flex flex-col gap-4">
            {publicNavItems.map((item) => {
              const id = toSectionId(item.route);
              const isActive = active === id;
              return (
                <li key={item.route}>
                  <a
                    href={item.route}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex items-center gap-4 py-1 font-mono text-xs uppercase tracking-[0.2em]"
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-green-main"
                          : "w-8 bg-fog-dim group-hover:w-16 group-hover:bg-white-smoke"
                      }`}
                    />
                    <span
                      className={
                        isActive
                          ? "text-white-smoke"
                          : "text-fog-dim transition-colors group-hover:text-white-smoke"
                      }
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="relative flex flex-wrap items-center gap-x-6 gap-y-3">
        <ul className="flex items-center gap-5">
          {SITE.social.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
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
          className="inline-flex items-center gap-2 rounded-full border border-green-main/60 px-4 py-2 font-mono text-sm text-green-main transition-colors hover:bg-green-main hover:text-black-background"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {UI.downloadCv}
        </a>
        <LangSwitch locale={locale} path="/" className="hidden lg:flex" />
      </div>
    </header>
  );
}
