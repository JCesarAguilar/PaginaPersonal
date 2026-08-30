"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Stage {
  eyebrow: string;
  headline: string;
  body: string;
  images: string[]; // 1 o más rutas. Si hay 2+, van cambiando según el scroll dentro de esta etapa.
  imageAlt: string;
  tag: string;
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
  },
  {
    eyebrow: "La transición",
    headline: "Mi pasión por la tecnología.",
    body: "Hace 16 meses empecé a estudiar y programar de manera intensiva, primero como desarrollador full-stack, construyendo proyectos personales de extremo a extremo hasta llevar uno de ellos, RedLegal.pe, a producción real. Hoy mi foco está en especializarme en inteligencia artificial desde sus fundamentos: entrenamiento de modelos, sistemas RAG, agentes LLM y aplicaciones que integran modelos de lenguaje en productos reales.",
    images: ["/images/setup-desarrollador-web.jpg"],
    imageAlt: "Julio aprendiendo desarrollo de software",
    tag: "Full-stack + IA",
  },
];

export default function AboutSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const stageEls = gsap.utils.toArray<HTMLElement>(".pin-stage");
      const cardEls = gsap.utils.toArray<HTMLElement>(".pin-card");

      // Estado inicial: solo la primera etapa y tarjeta visibles
      gsap.set(stageEls, { opacity: 0, y: 30 });
      gsap.set(stageEls[0], { opacity: 1, y: 0 });
      gsap.set(cardEls, { opacity: 0, scale: 0.94 });
      gsap.set(cardEls[0], { opacity: 1, scale: 1 });

      // Ventana activa de cada etapa dentro del timeline (mismas posiciones
      // que usa el cross-fade de texto), para poder repartir las imágenes
      // dentro de ese mismo rango de scroll.
      const stageWindows = STAGES.map((_, i) => ({
        start: i === 0 ? 0 : i + 0.1,
        end: i + 0.5,
      }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${stageEls.length * 100}%`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      stageEls.forEach((el, i) => {
        if (i === 0) return;
        const prevText = stageEls[i - 1];
        const prevCard = cardEls[i - 1];
        const nextCard = cardEls[i];

        tl.to(prevText, { opacity: 0, y: -30, duration: 0.4 }, i - 0.5)
          .to(prevCard, { opacity: 0, scale: 0.94, duration: 0.4 }, i - 0.5)
          .fromTo(
            el,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.4 },
            i - 0.3,
          )
          .fromTo(
            nextCard,
            { opacity: 0, scale: 0.94 },
            { opacity: 1, scale: 1, duration: 0.4 },
            i - 0.3,
          );
      });

      tl.to(".pin-progress-bar", { scaleY: 1, ease: "none" }, 0);

      // Dentro de cada etapa con 2+ imágenes: las va cross-fadeando
      // repartidas uniformemente en la ventana activa de esa etapa,
      // atado al mismo scrub → cambian exactamente según cuánto scrolleas.
      STAGES.forEach((stage, stageIndex) => {
        if (stage.images.length < 2) return;

        const imgEls = gsap.utils.toArray<HTMLElement>(
          `.pin-card-img-${stageIndex}`,
        );
        const dotEls = gsap.utils.toArray<HTMLElement>(
          `.pin-card-dot-${stageIndex}`,
        );
        const { start, end } = stageWindows[stageIndex];
        const span = end - start;
        const step = span / stage.images.length;

        gsap.set(imgEls, { opacity: 0 });
        gsap.set(imgEls[0], { opacity: 1 });
        gsap.set(dotEls[0], { opacity: 1 });

        for (let k = 0; k < imgEls.length - 1; k++) {
          const swapAt = start + step * (k + 1) - step * 0.3;
          tl.to(imgEls[k], { opacity: 0, duration: step * 0.6 }, swapAt)
            .to(imgEls[k + 1], { opacity: 1, duration: step * 0.6 }, swapAt)
            .to(dotEls[k], { opacity: 0.4, duration: step * 0.3 }, swapAt)
            .to(dotEls[k + 1], { opacity: 1, duration: step * 0.3 }, swapAt);
        }
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen w-full overflow-hidden bg-white-smoke flex items-center px-6 md:px-20"
    >
      {/* Barra de progreso lateral */}
      <div className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 w-px h-40 bg-[#1A2220]/20">
        <div
          className="pin-progress-bar absolute top-0 left-0 w-full h-full bg-green-main origin-top"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      {/* Layout: texto a la izquierda, tarjeta a la derecha */}
      <div className="relative z-10 w-full md:ml-16 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Columna de texto */}
        <div className="relative h-70 md:h-60">
          {STAGES.map((stage, i) => (
            <div
              key={i}
              className="pin-stage absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-green-main mb-4">
                {stage.eyebrow}
              </p>
              <h2 className="font-sans font-bold text-3xl md:text-5xl text-black-medium leading-[1.1] mb-4">
                {stage.headline}
              </h2>
              <p className="max-w-xl text-gray-strong text-base md:text-lg leading-relaxed">
                {stage.body}
              </p>
            </div>
          ))}
        </div>

        {/* Columna de tarjeta / imagen */}
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
  );
}
