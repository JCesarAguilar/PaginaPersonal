import Hero from "../components/home/Hero";
import NavBar from "../components/common/NavBar/NavBar";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import StackSection from "../components/home/StackSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/common/Footer";
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
      <NavBar />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
