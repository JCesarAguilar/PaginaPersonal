"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechBadge from "@/src/components/common/TechBadge";
import { STACK_CATEGORIES, type StackCategory } from "@/src/data/stack";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

function chunkPairs(items: StackCategory[]): StackCategory[][] {
  const groups: StackCategory[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    groups.push(items.slice(i, i + 2));
  }
  return groups;
}

export default function StackSection() {
  const container = useRef<HTMLElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // En desktop: pares de 2 categorías por pantalla. En mobile: 1 por pantalla.
  const groups: StackCategory[][] = isDesktop
    ? chunkPairs(STACK_CATEGORIES)
    : STACK_CATEGORIES.map((cat) => [cat]);

  useGSAP(
    () => {
      const stageEls = gsap.utils.toArray<HTMLElement>(".stack-stage");
      if (stageEls.length === 0) return;

      // Cada grupo pesa 1: boundaries = [0, 1, 2, ...]
      const boundaries = groups.map((_, i) => i);
      const totalDuration = groups.length;
      const last = groups.length - 1;

      // Puntos donde la página "se acomoda": primero al inicio, último al
      // final, los del medio en el centro de su tramo.
      const restPoints = groups.map((_, i) => {
        if (i === 0) return 0;
        if (i === last) return 1;
        return (i + 0.5) / totalDuration;
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduce = Boolean(context.conditions?.reduce);
          const shift = reduce ? 0 : 12;
          const fade = reduce ? 0.01 : 0.5;

          gsap.set(stageEls, { autoAlpha: 0, y: shift });
          gsap.set(stageEls[0], { autoAlpha: 1, y: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "power1.inOut" },
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: `+=${totalDuration * 100}%`,
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
              snap: {
                snapTo: restPoints,
                duration: { min: 0.3, max: 0.7 },
                delay: 0.1,
                ease: "power2.inOut",
              },
            },
          });

          stageEls.forEach((el, i) => {
            if (i === 0) return;
            const at = boundaries[i] - fade / 2;

            tl.to(
              stageEls[i - 1],
              { autoAlpha: 0, y: -shift, duration: fade },
              at,
            )
              .to(el, { autoAlpha: 1, y: 0, duration: fade }, at)
              .set(
                ".stack-counter-current",
                { innerText: i + 1 },
                boundaries[i],
              );
          });

          // La barra dura TODO el timeline: cada grupo recibe su tramo completo.
          tl.to(
            ".stack-progress-bar",
            { scaleY: 1, ease: "none", duration: totalDuration },
            0,
          );
        },
      );
    },
    // Se reconstruye todo cuando cambia la cantidad de pantallas
    // (al cruzar el breakpoint desktop/mobile).
    { scope: container, dependencies: [groups.length], revertOnUpdate: true },
  );

  return (
    <div id={toSectionId(PATHROUTES.STACK)}>
      <section
        ref={container}
        className="relative min-h-screen w-full overflow-hidden bg-black-background flex items-center px-6 md:px-20"
      >
        <div className="hidden md:flex flex-col items-center gap-4 absolute left-8 top-1/2 -translate-y-1/2">
          <span className="font-mono text-xs text-green-main">
            <span className="stack-counter-current">1</span>/{groups.length}
          </span>
          <div className="relative w-px h-32 bg-white/10">
            <div
              className="stack-progress-bar absolute top-0 left-0 w-full h-full bg-green-main origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>
        </div>

        {/* <p className="absolute top-16 left-6 md:left-20 font-mono text-xs tracking-[0.3em] uppercase text-green-main">
          Stack
        </p> */}

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="relative h-125 md:h-95">
            {groups.map((group) => (
              <div
                key={group.map((c) => c.label).join("-")}
                className="stack-stage absolute inset-0 grid md:grid-cols-2 gap-10"
              >
                {group.map((cat) => (
                  <div
                    key={cat.label}
                    className="bg-white p-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] h-full flex flex-col items-center gap-3"
                  >
                    <h2 className="font-mono font-bold text-3xl md:text-5xl text-black-medium mb-8">
                      {cat.label}
                    </h2>
                    <div className="flex flex-wrap gap-5 justify-center">
                      {cat.items.map((item) => (
                        <TechBadge
                          key={item.name}
                          name={item.name}
                          iconSrc={item.iconSrc}
                          size="lg"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
