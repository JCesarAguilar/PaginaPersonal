"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SITE } from "@/src/data/site";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";

gsap.registerPlugin(ScrollTrigger);

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
}

// Generador pseudoaleatorio con semilla fija: produce las mismas estrellas
// en el servidor y en el navegador, así no hay error de hidratación.
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = seeded(42);
const STARS: Star[] = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: rand() * 100,
  left: rand() * 100,
  size: 0.5 + rand() * 1.8,
  delay: rand() * 4,
}));

export default function ContactSection() {
  const container = useRef<HTMLElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(skyRef.current, {
        scale: 1.08,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray<HTMLElement>(".contact-star").forEach((star) => {
        gsap.to(star, {
          opacity: 0.15,
          duration: 1.5 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Number(star.dataset.delay),
        });
      });

      gsap.from(".contact-arch", {
        scale: 0.94,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: { trigger: container.current, start: "top 75%" },
      });

      gsap.from(".contact-fade-in", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: "top 60%" },
      });
    },
    { scope: container },
  );

  return (
    <div id={toSectionId(PATHROUTES.CONTACT)}>
      <section
        ref={container}
        className="relative w-full bg-black-background py-20 md:py-28 px-4 md:px-10 flex items-center justify-center"
      >
        <div
          className="contact-arch relative w-full max-w-5xl h-[75vh] md:h-[80vh] overflow-hidden border border-green-main/30"
          style={{ borderRadius: "50% 50% 0 0 / 18% 18% 0 0" }}
        >
          {/* Cielo con Ken Burns */}
          <div
            ref={skyRef}
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, #0F2A26 0%, #061210 45%, #020504 100%)",
            }}
          >
            {STARS.map((s) => (
              <span
                key={s.id}
                className="contact-star absolute rounded-full bg-white-smoke"
                data-delay={s.delay}
                style={{
                  top: `${s.top}%`,
                  left: `${s.left}%`,
                  width: s.size,
                  height: s.size,
                }}
              />
            ))}
          </div>

          {/* Viñeta */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,14,15,0.7) 0%, transparent 20%, transparent 75%, rgba(10,14,15,0.9) 100%)",
            }}
          />

          {/* Contenido */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="contact-fade-in font-mono text-xs tracking-[0.3em] uppercase text-green-main mb-6">
              ¿Trabajamos juntos?
            </p>

            <h2 className="contact-fade-in font-sans font-bold text-6xl md:text-8xl text-white-smoke leading-none mb-8">
              Hablemos.
            </h2>

            <p className="contact-fade-in max-w-md text-gray-strong text-base md:text-lg leading-relaxed mb-10">
              Sistemas de IA, RAG en producción, productos full-stack. Si buscas
              a alguien que combine rigor operativo con ingeniería real,
              escríbeme.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="contact-fade-in inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-main text-black-background font-mono text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Escríbeme →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
