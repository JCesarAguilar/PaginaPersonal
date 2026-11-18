"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechBadge from "@/src/components/common/TechBadge";
import { STACK_CATEGORIES } from "@/src/data/stack";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";

gsap.registerPlugin(ScrollTrigger);

export default function StackSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stack-card", {
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
            once: true,
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      id={toSectionId(PATHROUTES.STACK)}
      ref={container}
      className="relative w-full overflow-hidden bg-black-background px-6 py-24 md:px-20 md:py-32"
    >
      {/* Fondo: grilla de plano técnico (fina cada 24px, marcada cada 120px) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            "linear-gradient(rgba(61,255,176,0.09) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(61,255,176,0.09) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "24px 24px, 24px 24px, 120px 120px, 120px 120px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="stack-card mb-12 flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-main">
            Stack
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-white-smoke md:text-6xl">
            Herramientas con las que construyo.
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {STACK_CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className={`stack-card flex flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] md:p-8 ${
                cat.featured ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-center font-mono text-2xl font-bold text-black-medium lg:text-3xl">
                {cat.label}
              </h3>
              <ul className="flex flex-wrap justify-center gap-5">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <TechBadge
                      name={item.name}
                      iconSrc={item.iconSrc}
                      size="lg"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
