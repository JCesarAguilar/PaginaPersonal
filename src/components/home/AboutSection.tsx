"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PATHROUTES, toSectionId } from "@/src/helpers/publicNavItems";

gsap.registerPlugin(ScrollTrigger);

interface Stage {
  eyebrow: string;
  headline: string;
  body: string;
  images: string[];
  imageAlt: string;
  tag: string;
  // Cuánto "espacio" de scroll ocupa esta etapa comparado con las demás.
  // 1 = normal. 1.8 = casi el doble de scroll para verla completa.
  // Súbelo si tiene varias fotos o mucho texto; bájalo si es simple.
  weight?: number;
}

const STAGES: Stage[] = [
  {
    eyebrow: "2005 — 2024",
    headline: "Serví 16 años en la Marina de Guerra del Perú.",
    body: "Durante mi periodo de formación en la Escuela Naval, tuve la oportunidad de estudiar paralelamente la carrera de Ingeniería Industrial en la Universidad de Piura, luego escogí especializarme en submarinos, donde aprendí sobre el funcionamiento y empleo de todos los sistemas de abordo y a trabajar en equipo bajo presión.",
    images: [
      "/images/IMG_9867.jpg",
      "/images/648677725_10163091878982061_5983176655256556889_n.jpg",
      "/images/48408155_10156153191107061_242690601689022464_n.jpg",
    ],
    imageAlt: "Julio en la Marina de Guerra del Perú",
    tag: "Liderazgo operativo",
    weight: 1.8, // 3 fotos + párrafo largo → necesita más scroll
  },
  {
    eyebrow: "La transición",
    headline: "Mi pasión por la tecnología.",
    body: "Hace 16 meses empecé a estudiar y programar de manera intensiva, primero como desarrollador full-stack, construyendo proyectos personales de extremo a extremo hasta llevar uno de ellos, RedLegal.pe, a producción real. Hoy mi foco está en especializarme en inteligencia artificial desde sus fundamentos: entrenamiento de modelos, sistemas RAG, agentes LLM y aplicaciones que integran modelos de lenguaje en productos reales.",
    images: ["/images/setup-desarrollador-web.jpg"],
    imageAlt: "Julio aprendiendo desarrollo de software",
    tag: "Full-stack + IA Engineer",
    weight: 1,
  },
];

export default function AboutSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const stageEls = gsap.utils.toArray<HTMLElement>(".pin-stage");
      const cardEls = gsap.utils.toArray<HTMLElement>(".pin-card");

      // boundaries[i] = dónde empieza la etapa i en el timeline,
      // según el "weight" de cada una.
      const boundaries = [0];
      STAGES.forEach((stage) => {
        boundaries.push(
          boundaries[boundaries.length - 1] + (stage.weight ?? 1),
        );
      });
      const totalDuration = boundaries[boundaries.length - 1];
      const last = STAGES.length - 1;

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduce = Boolean(context.conditions?.reduce);
          const shift = reduce ? 0 : 12; // desplazamiento sutil del texto
          const cardScale = reduce ? 1 : 0.97; // la tarjeta casi no se encoge
          const fade = reduce ? 0.01 : 0.5; // duración del cruce

          // Tramo en el que cada etapa está completamente visible.
          const stageWindows = STAGES.map((_, i) => ({
            start: i === 0 ? 0 : boundaries[i] + fade / 2,
            end: i === last ? totalDuration : boundaries[i + 1] - fade / 2,
          }));

          gsap.set(stageEls, { autoAlpha: 0, y: shift });
          gsap.set(stageEls[0], { autoAlpha: 1, y: 0 });
          gsap.set(cardEls, { autoAlpha: 0, scale: cardScale });
          gsap.set(cardEls[0], { autoAlpha: 1, scale: 1 });

          const tl = gsap.timeline({
            defaults: { ease: "power1.inOut" },
            scrollTrigger: {
              trigger: container.current,
              start: "top top",
              end: `+=${totalDuration * 100}%`,
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
            },
          });

          // Cruce de texto y tarjeta, todo a la vez, centrado en el límite.
          stageEls.forEach((el, i) => {
            if (i === 0) return;
            const at = boundaries[i] - fade / 2;

            tl.to(
              stageEls[i - 1],
              { autoAlpha: 0, y: -shift, duration: fade },
              at,
            )
              .to(
                cardEls[i - 1],
                { autoAlpha: 0, scale: cardScale, duration: fade },
                at,
              )
              .to(el, { autoAlpha: 1, y: 0, duration: fade }, at)
              .to(cardEls[i], { autoAlpha: 1, scale: 1, duration: fade }, at);
          });

          // La barra dura TODO el timeline: así cada etapa recibe su "weight".
          tl.to(
            ".pin-progress-bar",
            { scaleY: 1, ease: "none", duration: totalDuration },
            0,
          );

          // Carrusel de fotos dentro de una etapa (misma lógica que tenías).
          STAGES.forEach((stage, stageIndex) => {
            if (stage.images.length < 2) return;

            const imgEls = gsap.utils.toArray<HTMLElement>(
              `.pin-card-img-${stageIndex}`,
            );
            const dotEls = gsap.utils.toArray<HTMLElement>(
              `.pin-card-dot-${stageIndex}`,
            );
            const { start, end } = stageWindows[stageIndex];
            const step = (end - start) / stage.images.length;

            gsap.set(imgEls, { opacity: 0 });
            gsap.set(imgEls[0], { opacity: 1 });
            gsap.set(dotEls[0], { opacity: 1 });

            for (let k = 0; k < imgEls.length - 1; k++) {
              const swapAt = start + step * (k + 1) - step * 0.3;
              tl.to(imgEls[k], { opacity: 0, duration: step * 0.6 }, swapAt)
                .to(imgEls[k + 1], { opacity: 1, duration: step * 0.6 }, swapAt)
                .to(dotEls[k], { opacity: 0.4, duration: step * 0.3 }, swapAt)
                .to(
                  dotEls[k + 1],
                  { opacity: 1, duration: step * 0.3 },
                  swapAt,
                );
            }
          });
        },
      );
    },
    { scope: container },
  );

  return (
    <div id={toSectionId(PATHROUTES.ABOUT)}>
      <section
        ref={container}
        className="relative min-h-screen w-full overflow-hidden bg-white-smoke flex items-center px-6 md:px-20"
      >
        <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 w-px h-40 bg-[#1A2220]/20">
          <div
            className="pin-progress-bar absolute top-0 left-0 w-full h-full bg-black-background origin-top"
            style={{ transform: "scaleY(0)" }}
          />
        </div>

        <div className="relative z-10 w-full md:ml-16 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative h-70 md:h-60">
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className="pin-stage absolute inset-0 flex flex-col justify-center"
              >
                <div className="bg-black-background  justify-center items-center flex w-fit px-4 py-1.5 rounded-full mb-4">
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-green-main ">
                    {stage.eyebrow}
                  </p>
                </div>

                <h2 className="font-sans font-bold text-[30px] md:text-5xl text-black-medium leading-[1.1] mb-4">
                  {stage.headline}
                </h2>
                <p className="max-w-xl text-gray-strong text-base md:text-lg leading-relaxed">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-80 md:h-96">
            {STAGES.map((stage, i) => (
              <div
                key={i}
                className="pin-card absolute inset-0 rounded-2xl overflow-hidden border border-black-medium/10 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
              >
                {stage.images.length > 0 ? (
                  <>
                    {stage.images.map((src, imgIndex) => (
                      <div
                        key={src}
                        className={`pin-card-img-${i} absolute inset-0`}
                      >
                        <Image
                          fill
                          src={src}
                          alt={`${stage.imageAlt} (${imgIndex + 1})`}
                          className="object-cover"
                        />
                      </div>
                    ))}

                    {stage.images.length > 1 && (
                      <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
                        {stage.images.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`pin-card-dot-${i} w-1.5 h-1.5 rounded-full bg-white opacity-40`}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 border-2 border-dashed border-black-medium/15 m-3 rounded-xl">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-strong/60">
                      Reemplaza con tu imagen
                    </span>
                    <span className="font-mono text-[10px] text-gray-strong/40">
                      {`stage.images = ["${stage.imageAlt}"]`}
                    </span>
                  </div>
                )}

                <span className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black-medium/85 backdrop-blur-sm font-mono text-[10px] tracking-[0.15em] uppercase text-green-main">
                  {stage.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
