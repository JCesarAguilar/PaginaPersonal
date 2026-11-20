export interface Stage {
  eyebrow: string;
  headline: string;
  body: string;
  images: string[];
  imageAlt: string;
}

export const STAGES: Stage[] = [
  {
    eyebrow: "2010 — hoy",
    headline: "Oficial de la Marina de Guerra del Perú.",
    body: "Durante mi formación en la Escuela Naval estudié en paralelo Ingeniería Industrial en la Universidad de Piura. Luego me especialicé en submarinos, donde aprendí el funcionamiento y empleo de todos los sistemas a bordo y a trabajar en equipo bajo presión.",
    images: [
      "/images/about/marina-1.webp",
      "/images/about/marina-2.webp",
      "/images/about/marina-3.webp",
    ],
    imageAlt: "Julio en la Marina de Guerra del Perú",
  },
  {
    eyebrow: "La transición",
    headline: "Mi pasión por la tecnología.",
    body: "Empecé a programar de forma intensiva como desarrollador full-stack, construyendo proyectos de punta a punta. Luego me especialicé en inteligencia artificial: completé la carrera de AI Engineering en Henry y hoy curso un máster en IA, desde los fundamentos de las redes neuronales hasta RAG, agentes y voz.",
    images: ["/images/about/setup-desarrollador.webp"],
    imageAlt: "Julio programando en su escritorio",
  },
  {
    eyebrow: "2026 — hoy",
    headline: "Construyo IA y productos en producción.",
    body: "Soy Full Stack AI Engineer a medio tiempo en Marchand Ramos Contratistas Generales: desarrollo sus sitios con Next.js y soluciones con IA como chatbots, agentes y sistemas RAG. En paralelo lidero RedLegal.pe, mi propio marketplace legal, de punta a punta: arquitectura, pagos, SEO y analítica.",
    images: ["/images/projects/redlegal.webp"],
    imageAlt: "RedLegal.pe, el marketplace legal que lidero",
  },
];
