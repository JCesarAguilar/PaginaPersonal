import NavBar from "../components/common/NavBar/NavBar";
import ProfileAside from "../components/layout/ProfileAside";
import {
  AboutBlock,
  ExperienceBlock,
  ProjectsBlock,
} from "../components/home/Sections";
import { SITE } from "../data/site";

// Datos estructurados para que Google entienda quién eres.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: "AI Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  sameAs: SITE.social.map((s) => s.url),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* En móvil se mantiene la barra superior con menú */}
      <div className="lg:hidden">
        <NavBar />
      </div>
      <div className="mx-auto min-h-screen max-w-7xl px-6 md:px-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-20">
        <ProfileAside />
        <main className="flex flex-col gap-24 pb-24 pt-16 lg:py-24">
          <AboutBlock />
          <ExperienceBlock />
          <ProjectsBlock />
          <footer className="font-mono text-xs text-fog-dim">
            © {new Date().getFullYear()} {SITE.name} · Lima, Perú
          </footer>
        </main>
      </div>
    </>
  );
}
