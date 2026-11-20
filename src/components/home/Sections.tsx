import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { ABOUT_PARAGRAPHS } from "@/src/data/about";
import { EXPERIENCE } from "@/src/data/experience";
import { PROJECTS, type Project } from "@/src/data/projects";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";
import { UI } from "@/src/data/ui";

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
    <ul className="flex flex-wrap gap-2" aria-label={UI.techList}>
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
      <SectionHeading>{UI.sections.about}</SectionHeading>
      <div className="flex flex-col gap-5 leading-relaxed text-fog">
        {ABOUT_PARAGRAPHS.map((text) => (
          <p key={text.slice(0, 24)}>{text}</p>
        ))}
      </div>
    </section>
  );
}

export function ExperienceBlock() {
  return (
    <section id={toSectionId(PATHROUTES.EXPERIENCE)} className="scroll-mt-24">
      <SectionHeading>{UI.sections.experience}</SectionHeading>
      <ol className="flex flex-col gap-4">
        {EXPERIENCE.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid gap-2 rounded-md border border-transparent p-5 transition-colors hover:border-white/10 hover:bg-white/[0.03] sm:grid-cols-[120px_1fr] sm:gap-6 lg:-mx-5"
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
      <SectionHeading>{UI.sections.projects}</SectionHeading>
      <ul className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <li
            key={project.slug}
            className="grid gap-5 rounded-md border border-transparent p-5 transition-colors hover:border-white/10 hover:bg-white/[0.03] sm:grid-cols-[200px_1fr] lg:-mx-5"
          >
            <div className="relative aspect-video overflow-hidden rounded border border-white/10 bg-white/[0.02] sm:mt-1">
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
                    {UI.viewProject}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">
                      {project.title} {UI.newTab}
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
                    {UI.viewCode}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">
                      {UI.codeLinkLabel(project.title)}
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
