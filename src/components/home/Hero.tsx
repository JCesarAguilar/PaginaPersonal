"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SonarRadar from "../common/SonarRadar";

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6 })
        .from(
          ".hero-title-line",
          { opacity: 0, y: 40, duration: 0.9, stagger: 0.12 },
          "-=0.3",
        )
        .from(".hero-tagline", { opacity: 0, y: 20, duration: 0.7 }, "-=0.4");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full overflow-hidden bg-black-background flex items-center justify-center md:justify-start px-6 md:px-20"
    >
      <SonarRadar className="absolute right-1/2 translate-x-1/2 md:top-30 md:right-20 md:translate-x-0" />

      {/* Contenido */}
      <div className="relative z-10 text-center md:text-left">
        <div className="font-sans leading-[0.95] gap-4 md:gap-7 flex flex-col">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h1 className="hero-title-line font-mono text-3xl md:text-[35px] font-bold text-white-smoke">
              ¡Hola!
              <br className="md:hidden" /> Me llamo{" "}
              <span className="text-green-main">Julio</span>.
            </h1>
            <p className="hero-eyebrow font-mono text-sm tracking-[0.3em] uppercase text-green-main">
              Desarrollo de software
              <span className="hidden md:inline"> | </span>
              <br className="md:hidden" />
              AI Engineer
            </p>
          </div>

          <p className="hero-tagline font-mono text-3xl md:text-[40px] font-medium text-white-smoke">
            <span className="md:hidden">Soluciones con IA</span>
            <span className="hidden md:inline">
              Soluciones con Inteligencia Artificial
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
