"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface StackBlip {
  label: string;
  angle: number;
  radius: number;
}

interface BlipElements {
  dot: HTMLSpanElement | null;
  label: HTMLSpanElement | null;
}

const STACK_BLIPS: StackBlip[] = [
  { label: "Python", angle: 20, radius: 100 },
  { label: "LangChain", angle: 65, radius: 260 },
  { label: "RAG", angle: 110, radius: 200 },
  { label: "Pinecone", angle: 155, radius: 250 },
  { label: "Next.js", angle: 205, radius: 230 },
  { label: "NestJS", angle: 250, radius: 260 },
  { label: "PostgreSQL", angle: 295, radius: 210 },
  { label: "TypeScript", angle: 340, radius: 245 },
];

// Ancho del "haz" del sonar. Debe calzar con el conic-gradient (60deg) de abajo.
const SWEEP_WIDTH = 60;
// El conic-gradient arranca en la parte de ARRIBA (12 en punto) y gira en
// sentido horario. Nuestros ángulos de blip usan convención matemática
// (0deg = derecha, sentido horario porque el eje Y va hacia abajo en pantalla).
// Este offset convierte un ángulo de blip a la misma referencia que el gradient.
const ANGLE_OFFSET = 90;

function normalize(angle: number): number {
  return ((angle % 360) + 360) % 360;
}

interface SonarRadarProps {
  className?: string;
}

export default function SonarRadar({ className = "" }: SonarRadarProps) {
  const sweepRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const blipRefs = useRef<BlipElements[]>([]);
  const activeState = useRef<boolean[]>(STACK_BLIPS.map(() => false));

  useGSAP(
    () => {
      gsap.to(sweepRef.current, {
        rotate: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
        onUpdate: function () {
          const rotation = normalize(
            Number(gsap.getProperty(sweepRef.current, "rotate")),
          );

          STACK_BLIPS.forEach((blip, i) => {
            const blipAngle = normalize(blip.angle + ANGLE_OFFSET);
            const diff = normalize(blipAngle - rotation);
            const isInsideSweep = diff <= SWEEP_WIDTH;

            const el = blipRefs.current[i];
            if (!el || !el.dot || !el.label) return;

            if (isInsideSweep && !activeState.current[i]) {
              activeState.current[i] = true;
              gsap.to(el.dot, {
                backgroundColor: "#7CFFCE",
                boxShadow: "0 0 16px 4px rgba(124,255,206,0.9)",
                scale: 1.8,
                duration: 0.12,
                ease: "power1.out",
                overwrite: true,
              });
              gsap.to(el.label, {
                color: "#E8ECEA",
                duration: 0.12,
                overwrite: true,
              });
            } else if (!isInsideSweep && activeState.current[i]) {
              activeState.current[i] = false;
              gsap.to(el.dot, {
                backgroundColor: "var(--color-green-main)",
                boxShadow: "0 0 8px var(--color-green-main)",
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                overwrite: true,
              });
              gsap.to(el.label, {
                color: "#5A6B66",
                duration: 0.6,
                overwrite: true,
              });
            }
          });
        },
      });

      gsap.from(".radar-ring", {
        opacity: 0,
        scale: 0.85,
        duration: 1,
        stagger: 0.08,
      });

      gsap.from(".radar-blip", {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        stagger: { each: 0.06, from: "random" },
        delay: 0.3,
      });

      gsap.to(".radar-wrap", {
        yPercent: 15,
        opacity: 0.4,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className={`radar-wrap pointer-events-none flex items-center justify-end ${className}`}
    >
      <div className="relative w-170 h-170 max-w-[90vw] max-h-[90vw]">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="radar-ring absolute inset-0 rounded-full border"
            style={{
              borderColor: "rgba(61,255,176,0.15)",
              transform: `scale(${i * 0.25})`,
            }}
          />
        ))}

        <div
          ref={sweepRef}
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(61,255,176,0.35) 0deg, transparent 60deg)",
            borderRadius: "9999px",
          }}
        />

        {STACK_BLIPS.map((blip, i) => {
          const rad = (blip.angle * Math.PI) / 180;
          const x = Math.cos(rad) * blip.radius;
          const y = Math.sin(rad) * blip.radius;
          return (
            <div
              key={blip.label}
              className="radar-blip absolute flex items-center gap-2"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <span
                ref={(el) => {
                  if (!blipRefs.current[i])
                    blipRefs.current[i] = { dot: null, label: null };
                  blipRefs.current[i].dot = el;
                }}
                className="w-1.5 h-1.5 rounded-full bg-[#3DFFB0] shadow-[0_0_8px_#3DFFB0]"
              />
              <span
                ref={(el) => {
                  if (!blipRefs.current[i])
                    blipRefs.current[i] = { dot: null, label: null };
                  blipRefs.current[i].label = el;
                }}
                className="text-[11px] font-mono text-[#5A6B66] whitespace-nowrap tracking-wide"
              >
                {blip.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
