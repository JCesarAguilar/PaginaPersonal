import CursorSpotlight from "@/src/components/common/CursorSpotlight";
import NavBar from "@/src/components/common/NavBar/NavBar";
import {
  AboutBlock,
  ExperienceBlock,
  ProjectsBlock,
} from "@/src/components/home/Sections";
import ProfileAside from "@/src/components/layout/ProfileAside";
import { SITE } from "@/src/data/site";
import { getContent, localePath, type Locale } from "@/src/i18n/config";

// Página de inicio, igual en ambos idiomas; solo cambia el texto.
export default function HomePage({ locale }: { locale: Locale }) {
  const { SITE_TEXT } = getContent(locale);

  // Datos estructurados para que Google entienda quién eres.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: `${SITE.url}${localePath(locale, "/") === "/" ? "" : localePath(locale, "/")}`,
    jobTitle: SITE_TEXT.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    sameAs: SITE.social.map((s) => s.url),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <CursorSpotlight />
      {/* En móvil se mantiene la barra superior con menú */}
      <div className="lg:hidden">
        <NavBar locale={locale} />
      </div>
      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-6 md:px-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-20">
        <ProfileAside locale={locale} />
        <main className="flex flex-col gap-24 pb-24 pt-16 lg:py-24">
          <AboutBlock locale={locale} />
          <ExperienceBlock locale={locale} />
          <ProjectsBlock locale={locale} />
          <footer className="font-mono text-xs text-fog-dim">
            © {new Date().getFullYear()} {SITE.name} · {SITE_TEXT.location}
          </footer>
        </main>
      </div>
    </>
  );
}
