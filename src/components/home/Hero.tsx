"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SonarRadar from "../common/SonarRadar";
import { PATHROUTES } from "@/src/helpers/publicNavItems";

// Pruebas concretas: un número + qué significa. Actualízalas cuando cambien.
const PROOF = [
  { value: "+120", label: "usuarios en 48 h en RedLegal.pe" },
  { value: "100%", label: "respuestas con fuente citada en el RAG legal" },
  { value: "+5", label: "aplicaciones de IA y web desplegadas" },
];

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6 })
          .from(
            ".hero-title-line",
            { opacity: 0, y: 40, duration: 0.9, stagger: 0.12 },
            "-=0.3",
          )
          .from(".hero-cta", { opacity: 0, y: 12, duration: 0.5 }, "-=0.3")
          .from(".hero-proof", { opacity: 0, y: 12, duration: 0.5 }, "-=0.2");
      });
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

          <div className="hero-cta flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href={PATHROUTES.PROJECTS}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-green-main text-black-background font-mono text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Ver proyectos ↓
            </a>
            <a
              href={PATHROUTES.CONTACT}
              className="inline-flex items-center h-12 px-6 rounded-full border border-white/20 text-white-smoke font-mono text-sm font-bold hover:border-green-main transition-colors"
            >
              Hablemos
            </a>
          </div>

          <dl className="hero-proof grid grid-cols-3 gap-4 md:gap-10 max-w-xl mx-auto md:mx-0 pt-6 border-t border-white/10">
            {PROOF.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-fog leading-snug">
                  {item.label}
                </dt>
                <dd className="order-1 font-sans font-bold text-2xl md:text-3xl text-white-smoke leading-none">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
