"use client";

import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PROJECTS } from "@/src/data/projects";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const stageEls = gsap.utils.toArray<HTMLElement>(".proj-stage");

      const boundaries = [0];
      PROJECTS.forEach((p) => {
        boundaries.push(boundaries[boundaries.length - 1] + (p.weight ?? 1));
      });
      const totalDuration = boundaries[boundaries.length - 1];
      const last = PROJECTS.length - 1;

      // Puntos donde la página "se acomoda" (0 = inicio, 1 = final del pin).
      // Primero y último en los extremos; los del medio, en el centro de su tramo.
      const restPoints = PROJECTS.map((_, i) => {
        if (i === 0) return 0;
        if (i === last) return 1;
        return (boundaries[i] + boundaries[i + 1]) / 2 / totalDuration;
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduce = Boolean(context.conditions?.reduce);
          const shift = reduce ? 0 : 12; // desplazamiento sutil en px
          const fade = reduce ? 0.01 : 0.5; // duración del cruce

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
            // El cruce queda centrado justo en el límite entre proyectos.
            const at = boundaries[i] - fade / 2;

            tl.to(
              stageEls[i - 1],
              { autoAlpha: 0, y: -shift, duration: fade },
              at,
            )
              .to(el, { autoAlpha: 1, y: 0, duration: fade }, at)
              .set(
                ".proj-counter-current",
                { innerText: i + 1 },
                boundaries[i],
              );
          });

          // La barra dura TODO el timeline: así el timeline mide lo mismo
          // que el scroll y el último proyecto recibe su "weight" completo.
          tl.to(
            ".proj-progress-bar",
            { scaleY: 1, ease: "none", duration: totalDuration },
            0,
          );
        },
      );
    },
    { scope: container },
  );

  return (
    <div id={toSectionId(PATHROUTES.PROJECTS)}>
      <section
        ref={container}
        className="relative min-h-screen w-full overflow-hidden bg-black-background flex items-center px-6 md:px-20 py-24"
      >
        <div className="hidden md:flex flex-col items-center gap-4 absolute left-8 top-1/2 -translate-y-1/2">
          <span className="font-mono text-xs text-green-main">
            <span className="proj-counter-current">1</span>/{PROJECTS.length}
          </span>
          <div className="relative w-px h-32 bg-white/10">
            <div
              className="proj-progress-bar absolute top-0 left-0 w-full h-full bg-green-main origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>
        </div>

        {/* <p className="absolute top-16 left-6 md:left-20 font-mono text-xs tracking-[0.3em] uppercase text-green-main">
        Proyectos
      </p> */}

        <div className="relative z-10 max-w-6xl mx-auto md:ml-20 w-full">
          <div className="relative h-140 md:h-105">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="proj-stage absolute inset-0 grid md:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <p className="font-mono text-xs tracking-[0.25em] uppercase text-green-main mb-4">
                    {project.tag}
                  </p>
                  <h3 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-fog text-base leading-relaxed mb-6 max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-sans font-bold text-2xl text-green-main">
                          {m.value}
                        </div>
                        <div className="text-xs text-fog">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-white/15 text-[11px] font-mono text-fog"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-main text-black-medium font-mono text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      Ver proyecto →
                    </Link>
                  )}
                </div>

                <div className="relative w-full aspect-video md:h-full rounded-2xl overflow-hidden border border-white/10 bg-white/2">
                  {project.image ? (
                    <Image
                      fill
                      src={project.image}
                      alt={project.imageAlt}
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/10 m-3 rounded-xl">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-strong/60">
                        Reemplaza con tu captura
                      </span>
                      <span className="font-mono text-[10px] text-gray-strong/40">
                        {`project.image = "${project.imageAlt}"`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
