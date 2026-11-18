"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SonarRadar from "../common/SonarRadar";
import { PATHROUTES } from "@/src/helpers/publicNavItems";
import { HERO, PROOF } from "@/src/data/hero";
import { SITE } from "@/src/data/site";
import { buttonStyles } from "@/src/components/ui/button-styles";

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
      className="relative min-h-screen w-full overflow-hidden bg-black-background flex items-center justify-center md:justify-start px-6 md:px-20 pt-24 pb-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 md:opacity-100"
      >
        <SonarRadar className="absolute right-1/2 translate-x-1/2 md:top-30 md:right-20 md:translate-x-0" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl text-center md:text-left">
        <div className="flex flex-col gap-7 md:gap-9">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="hero-eyebrow font-mono text-sm md:text-base text-white-smoke">
              {HERO.greeting}{" "}
              <span className="text-green-main">{SITE.name}</span>
            </p>
            <h1 className="hero-title-line font-display font-bold text-4xl md:text-6xl leading-[1.05] text-white-smoke text-balance">
              {HERO.title}
            </h1>
            <p className="hero-title-line max-w-xl text-base md:text-lg leading-relaxed text-fog">
              {HERO.tagline}
            </p>
          </div>

          <div className="hero-cta flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href={PATHROUTES.PROJECTS}
              className={`${buttonStyles.primary} inline-flex items-center gap-2 h-12 px-6`}
            >
              Ver proyectos ↓
            </a>
            <a
              href={PATHROUTES.CONTACT}
              className={`${buttonStyles.secondary} inline-flex items-center h-12 px-6`}
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
