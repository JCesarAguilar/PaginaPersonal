export interface Experience {
  period: string;
  role: string;
  company: string;
  url?: string;
  description: string;
  stack: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    period: "2026 — hoy",
    role: "Full Stack AI Engineer · Part time",
    company: "Marchand Ramos Contratistas Generales",
    description:
      "Desarrollo los sitios del grupo con Next.js y soluciones con IA para atención al cliente: chatbots, agentes y sistemas RAG. Alma Host, uno de sus sitios, obtuvo 99/100 en rendimiento y 100/100 en accesibilidad en Lighthouse.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "RAG"],
  },
  {
    period: "2026 — hoy",
    role: "Propietario de producto",
    company: "RedLegal.pe",
    url: "https://redlegal.pe",
    description:
      "Llevé la plataforma de la idea a producción: pagos recurrentes con Culqi, +110 páginas migradas a SSG/ISR, SEO técnico que triplicó las impresiones en Google, CI con GitHub Actions y tests con Jest.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Culqi", "PostHog"],
  },
  {
    period: "2010 — hoy",
    role: "Oficial",
    company: "Marina de Guerra del Perú",
    description:
      "Especializado en submarinos. Liderazgo de equipos multidisciplinarios y decisiones basadas en datos en entornos exigentes.",
    stack: ["Liderazgo", "Trabajo bajo presión"],
  },
];
