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
      className="relative min-h-screen w-full overflow-hidden bg-black-background flex items-center justify-start px-6 md:px-20"
    >
      <SonarRadar className="absolute top-30 right-20" />

      {/* Contenido */}
      <div className="relative z-10 text-left">
        <div className="font-sans leading-[0.95] gap-7 flex flex-col">
          <div className="flex flex-col gap-4">
            <h1 className="hero-title-line font-mono text-3xl md:text-[40px] font-bold text-[#E8ECEA]">
              ¡Hola! Me llamo <span className="text-green-main">Julio</span>.
            </h1>
            <h3 className="hero-eyebrow font-mono text-sm tracking-[0.3em] uppercase text-green-main">
              Desarrollo de software → AI Engineer
            </h3>
          </div>

          <h2 className="hero-tagline text-3xl md:text-5xl font-medium text-[#E8ECEA]">
            Soluciones con Inteligencia Artificial
          </h2>
        </div>
      </div>
    </section>
  );
}
