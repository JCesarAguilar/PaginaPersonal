"use client";

import Hero from "../components/home/Hero";
import NavBar from "../components/common/NavBar/NavBar";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import StackSection from "../components/home/StackSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
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
