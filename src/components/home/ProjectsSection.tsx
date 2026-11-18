"use client";

import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PROJECTS, type Project } from "@/src/data/projects";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";
import { buttonStyles } from "@/src/components/ui/button-styles";

gsap.registerPlugin(ScrollTrigger);

// Portada: la captura si existe; si no, la métrica principal sobre el motivo del sonar.
function ProjectCover({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        fill
        src={project.image}
        alt={project.imageAlt ?? project.title}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
      />
    );
  }

  const [main] = project.metrics;
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-end gap-2 p-6 md:p-10 bg-[radial-gradient(circle_at_85%_15%,rgba(61,255,176,0.16),transparent_55%)]">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-green-main/15"
      >
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="120" />
        <circle cx="200" cy="200" r="180" />
      </svg>
      <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-green-main">
        {project.tag}
      </p>
      {main && (
        <>
          <p className="relative font-display text-5xl md:text-7xl font-bold leading-none text-white-smoke">
            {main.value}
          </p>
          <p className="relative text-sm text-fog">{main.label}</p>
        </>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".proj-item").forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 32,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%", once: true },
          });
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      id={toSectionId(PATHROUTES.PROJECTS)}
      ref={container}
      className="relative w-full bg-black-background px-6 py-24 md:px-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <header className="proj-item flex flex-col gap-4 border-b border-white/10 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-main">
            Proyectos
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-white-smoke md:text-6xl">
            IA y producto, medidos con datos.
          </h2>
        </header>

        <ul className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <li
              key={project.slug}
              className="proj-item grid items-center gap-8 border-b border-white/10 py-16 md:grid-cols-2 md:gap-14"
            >
              <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-green-main">
                  {project.tag}
                </p>
                <h3 className="mb-4 font-sans text-3xl font-bold text-white md:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-md text-base leading-relaxed text-fog">
                  {project.description}
                </p>

                <dl className="mb-6 flex flex-wrap gap-6">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <dt className="order-2 text-xs text-fog">{m.label}</dt>
                      <dd className="order-1 font-sans text-2xl font-bold text-green-main">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mb-8 flex flex-wrap gap-2" aria-label="Tecnologías">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-fog"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${buttonStyles.primary} inline-flex items-center gap-2 px-5 py-2.5`}
                    >
                      Ver proyecto →
                      <span className="sr-only">
                        {project.title} (se abre en una pestaña nueva)
                      </span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.liveUrl
                          ? buttonStyles.secondary
                          : buttonStyles.primary
                      } inline-flex items-center gap-2 px-5 py-2.5`}
                    >
                      Ver código ↗
                      <span className="sr-only">
                        de {project.title} en GitHub (se abre en una pestaña
                        nueva)
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/2 lg:aspect-4/3">
                <ProjectCover project={project} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
