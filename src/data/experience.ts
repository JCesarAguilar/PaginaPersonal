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
      "Marketplace legal en producción que conecta a personas con abogados verificados en Perú por especialidad y ciudad, con contacto directo por WhatsApp y suscripciones de pago para abogados. Lo fundé y lo construyo de punta a punta: producto, arquitectura, backend, frontend, despliegue y crecimiento. Con Next.js genero más de 150 landing pages por especialidad y ciudad indexadas en Google; una API modular en NestJS sobre PostgreSQL resuelve las búsquedas con filtros múltiples, y mido el embudo con eventos en PostHog para decidir con datos.",
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
