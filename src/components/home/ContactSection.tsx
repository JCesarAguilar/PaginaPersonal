"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Briefcase, Code, Download, Mail } from "lucide-react";
import { SITE } from "@/src/data/site";
import ContactForm from "./ContactForm";
import CopyEmailButton from "./CopyEmailButton";
import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";

gsap.registerPlugin(ScrollTrigger);

// Ícono para cada red de SITE.social (lucide ya no incluye logos de marcas).
const SOCIAL_ICONS = { LinkedIn: Briefcase, GitHub: Code } as const;

const CHANNEL =
  "group flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-colors hover:border-green-main/50 hover:bg-white/[0.02]";
const ICON_BOX =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-white-smoke";

export default function ContactSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-fade-in", {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
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
      id={toSectionId(PATHROUTES.CONTACT)}
      ref={container}
      className="relative w-full overflow-hidden border-t border-white/10 bg-black-background px-6 py-24 md:px-20 md:py-32"
    >
      {/* Anillos de sonar decorativos: el mismo motivo del hero, muy tenue */}
      <svg
        aria-hidden="true"
        viewBox="0 0 640 640"
        fill="none"
        stroke="currentColor"
        className="pointer-events-none absolute -right-48 -top-48 h-160 w-160 text-green-main/8"
      >
        <circle cx="320" cy="320" r="80" />
        <circle cx="320" cy="320" r="160" />
        <circle cx="320" cy="320" r="240" />
        <circle cx="320" cy="320" r="318" />
      </svg>

      <div className="relative mx-auto max-w-6xl">
        {/* Encabezado */}
        <header className="contact-fade-in flex flex-col gap-6 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-main">
              Contacto
            </p>
            <h2 className="font-sans text-5xl font-bold leading-none text-white-smoke md:text-7xl">
              Hablemos.
            </h2>
          </div>
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 font-mono text-xs text-white-smoke">
            <span className="h-2 w-2 rounded-full bg-green-main shadow-[0_0_10px_#3dffb0]" />
            Disponible · respondo en menos de 24 h
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          {/* Canales directos */}
          <div className="contact-fade-in flex min-w-0 flex-col gap-3">
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-fog-dim">
              Canales directos
            </p>

            {/* Correo: el canal principal, destacado */}
            <div className="flex flex-col gap-4 rounded-2xl border border-green-main/30 bg-[#0e1416] p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-main/10 text-green-main">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-fog">Correo</p>
                  <p className="break-all font-mono text-sm text-white-smoke select-all md:text-base">
                    {SITE.email}
                  </p>
                </div>
              </div>
              <div className="self-start">
                <CopyEmailButton />
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {SITE.social.map((link) => {
                const Icon = SOCIAL_ICONS[link.name];
                return (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={CHANNEL}
                    >
                      <span className={ICON_BOX}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-white-smoke">
                          {link.name}
                        </span>
                        <span className="block truncate font-mono text-xs text-fog">
                          {link.url.replace(/^https:\/\/(www\.)?/, "")}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 text-fog transition-colors group-hover:text-green-main"
                        aria-hidden="true"
                      />
                      <span className="sr-only">
                        (se abre en una pestaña nueva)
                      </span>
                    </a>
                  </li>
                );
              })}

              <li>
                <a href={SITE.cvUrl} download className={CHANNEL}>
                  <span className={ICON_BOX}>
                    <Download className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-white-smoke">
                      Currículum
                    </span>
                    <span className="block font-mono text-xs text-fog">
                      Descargar PDF
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <p className="mt-2 font-mono text-xs text-fog-dim">
              Lima, Perú · UTC−5
            </p>
          </div>

          {/* Formulario */}
          <div className="contact-fade-in min-w-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
