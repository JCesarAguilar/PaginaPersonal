"use client";

import Hero from "../components/home/Hero";
import NavBar from "../components/common/NavBar/NavBar";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import StackSection from "../components/home/StackSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
    </div>
  );
}
