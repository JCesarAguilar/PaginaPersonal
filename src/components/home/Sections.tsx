import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { STAGES } from "@/src/data/about";
import { EXPERIENCE } from "@/src/data/experience";
import { PROJECTS, type Project } from "@/src/data/projects";
import { STACK_CATEGORIES } from "@/src/data/stack";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";

// Título de sección: en móvil queda pegado arriba al hacer scroll;
// en escritorio lo reemplaza el menú de la columna izquierda.
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-19 z-20 -mx-6 mb-6 bg-black-background/85 px-6 py-4 backdrop-blur lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
      <h2 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-green-main">
        {children}
      </h2>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full bg-green-main/10 px-3 py-1 font-mono text-[11px] text-green-main"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function AboutBlock() {
  return (
    <section id={toSectionId(PATHROUTES.ABOUT)} className="scroll-mt-24">
      <SectionHeading>Sobre mí</SectionHeading>
      <div className="flex flex-col gap-5 leading-relaxed text-fog">
        {STAGES.map((stage) => (
          <p key={stage.eyebrow}>
            <span className="mr-2 font-mono text-xs uppercase tracking-[0.15em] text-white-smoke">
              {stage.eyebrow}
            </span>
            {stage.body}
          </p>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {STAGES[0].images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
          >
            <Image
              fill
              src={src}
              alt={`${STAGES[0].imageAlt} (${i + 1})`}
              sizes="(min-width: 1024px) 15vw, 30vw"
              className="object-cover grayscale-[30%] transition duration-500 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceBlock() {
  return (
    <section id={toSectionId(PATHROUTES.EXPERIENCE)} className="scroll-mt-24">
      <SectionHeading>Experiencia</SectionHeading>
      <ol className="flex flex-col gap-4">
        {EXPERIENCE.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid gap-2 rounded-2xl border border-transparent p-5 transition-colors hover:border-white/10 hover:bg-white/[0.03] sm:grid-cols-[120px_1fr] sm:gap-6 lg:-mx-5"
          >
            <p className="pt-1 font-mono text-xs uppercase tracking-[0.1em] text-fog-dim">
              {job.period}
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold leading-snug text-white-smoke">
                {job.role} ·{" "}
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-green-main"
                  >
                    {job.company}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className="text-sm leading-relaxed text-fog">
                {job.description}
              </p>
              <Chips items={job.stack} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectThumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        fill
        src={project.image}
        alt={project.imageAlt ?? project.title}
        sizes="(min-width: 640px) 200px, 100vw"
        className="object-cover object-top"
      />
    );
  }
  const [main] = project.metrics;
  return (
    <div className="absolute inset-0 flex flex-col justify-end bg-[radial-gradient(circle_at_80%_10%,color-mix(in_srgb,var(--color-green-main)_18%,transparent),transparent_60%)] p-4">
      <p className="font-display text-3xl font-bold leading-none text-white-smoke">
        {main?.value}
      </p>
      <p className="mt-1 text-[11px] leading-tight text-fog">{main?.label}</p>
    </div>
  );
}

export function ProjectsBlock() {
  return (
    <section id={toSectionId(PATHROUTES.PROJECTS)} className="scroll-mt-24">
      <SectionHeading>Proyectos</SectionHeading>
      <ul className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <li
            key={project.slug}
            className="grid gap-5 rounded-2xl border border-transparent p-5 transition-colors hover:border-white/10 hover:bg-white/[0.03] sm:grid-cols-[200px_1fr] lg:-mx-5"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] sm:mt-1">
              <ProjectThumb project={project} />
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog-dim">
                {project.tag}
              </p>
              <h3 className="text-lg font-semibold leading-snug text-white-smoke">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-fog">
                {project.description}
              </p>
              <dl className="flex flex-wrap gap-x-6 gap-y-2">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex items-baseline gap-2">
                    <dt className="order-2 text-xs text-fog">{m.label}</dt>
                    <dd className="order-1 font-semibold text-green-main">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Chips items={project.stack} />
              <div className="flex flex-wrap gap-5 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-sm text-white-smoke transition-colors hover:text-green-main"
                  >
                    Ver proyecto
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
                    className="inline-flex items-center gap-1 font-mono text-sm text-white-smoke transition-colors hover:text-green-main"
                  >
                    Ver código
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">
                      de {project.title} en GitHub (se abre en una pestaña
                      nueva)
                    </span>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function StackBlock() {
  return (
    <section id={toSectionId(PATHROUTES.STACK)} className="scroll-mt-24">
      <SectionHeading>Stack</SectionHeading>
      <div className="flex flex-col gap-6">
        {STACK_CATEGORIES.map((cat) => (
          <div key={cat.label} className="grid gap-3 sm:grid-cols-[160px_1fr]">
            <h3 className="pt-1 font-mono text-xs uppercase tracking-[0.15em] text-fog-dim">
              {cat.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white-smoke"
                >
                  {item.iconSrc && (
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-white-smoke">
                      <Image
                        src={item.iconSrc}
                        alt=""
                        width={14}
                        height={14}
                        unoptimized
                      />
                    </span>
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
