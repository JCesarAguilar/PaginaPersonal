"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TechBadge from "@/src/components/common/TechBadge";
import { STACK_CATEGORIES, type StackCategory } from "@/src/data/stack";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";

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
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // En desktop: pares de 2 categorías por pantalla. En mobile: 1 por pantalla.
  const groups: StackCategory[][] = isDesktop
    ? chunkPairs(STACK_CATEGORIES)
    : STACK_CATEGORIES.map((cat) => [cat]);

  useGSAP(
    () => {
      const stageEls = gsap.utils.toArray<HTMLElement>(".stack-stage");
      if (stageEls.length === 0) return;

      gsap.set(stageEls, { opacity: 0, y: 30 });
      gsap.set(stageEls[0], { opacity: 1, y: 0 });

      const boundaries = [0];
      groups.forEach(() => {
        boundaries.push(boundaries[boundaries.length - 1] + 1);
      });
      const totalDuration = boundaries[boundaries.length - 1];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${totalDuration * 100}%`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      stageEls.forEach((el, i) => {
        if (i === 0) return;
        const prev = stageEls[i - 1];
        const boundary = boundaries[i];

        tl.to(
          prev,
          { opacity: 0, y: -30, duration: 0.4 },
          boundary - 0.5,
        ).fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.4 },
          boundary - 0.3,
        );
      });

      tl.to(".stack-progress-bar", { scaleY: 1, ease: "none" }, 0);

      gsap.utils.toArray<HTMLElement>(".stack-counter").forEach((el, i) => {
        if (i === 0) return;
        const boundary = boundaries[i];
        tl.to(
          ".stack-counter-current",
          { innerText: i + 1, duration: 0.1, snap: { innerText: 1 } },
          boundary - 0.4,
        );
      });
    },
    // Se reconstruye el timeline completo cada vez que cambia la cantidad
    // de "pantallas" (al cruzar el breakpoint desktop/mobile).
    { scope: container, dependencies: [groups.length], revertOnUpdate: true },
  );

  return (
    <div id={toSectionId(PATHROUTES.SOLUTIONS)}>
      <section
        ref={container}
        className="relative min-h-screen w-full overflow-hidden bg-black-background flex items-center px-6 md:px-20"
      >
        <div className="hidden md:flex flex-col items-center gap-4 absolute left-8 top-1/2 -translate-y-1/2">
          <span className="font-mono text-xs text-green-main">
            <span className="stack-counter-current">1</span>/{groups.length}
          </span>
          <div className="relative w-px h-32 bg-black-medium/10">
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
                className="stack-stage stack-counter absolute inset-0 grid md:grid-cols-2 gap-10"
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
