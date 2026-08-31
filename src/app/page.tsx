"use client";

import Hero from "../components/home/Hero";
import NavBar from "../components/common/NavBar/NavBar";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
