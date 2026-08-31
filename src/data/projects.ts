export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  metrics: Metric[];
  image?: string;
  imageAlt: string;
  liveUrl?: string;
  codeUrl?: string;
  weight?: number;
}

export const PROJECTS: Project[] = [
  {
    tag: "Producto en producción",
    title: "RedLegal.pe",
    description:
      "Marketplace legal B2C que conecta personas con abogados verificados en Perú por especialidad y ciudad. Desarrollo end-to-end: arquitectura, backend, frontend y despliegue.",
    stack: [
      "Next.js 14",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "PostHog",
    ],
    metrics: [
      { value: "+120", label: "usuarios en 48h" },
      { value: "16%", label: "conversión a registro" },
      { value: "10+", label: "ciudades del Perú" },
    ],
    image: "/images/projects/RedLegalHome.png",
    imageAlt: "Captura de RedLegal.pe en funcionamiento",
    liveUrl: "https://redlegal.pe",
    weight: 1.4,
  },

  {
    tag: "AI Engineer",
    title: "Evaluador de CVs con IA",
    description:
      "Aplicación web que evalúa la compatibilidad entre un CV y una oferta de trabajo usando un LLM, devolviendo un informe estructurado con experiencia relevante, fortalezas, áreas de mejora y porcentaje de ajuste al puesto.",
    stack: ["Python", "LangChain", "Google Gemini", "Pydantic", "Streamlit"],
    metrics: [{ value: "100%", label: "salidas validadas y estructuradas" }],
    image: "/images/projects/AnalizadorCVHome.png", // pon aquí "/projects/cv-evaluator.png"
    imageAlt: "Evaluador de CVs con IA mostrando un informe",
    liveUrl: "https://cv-analyzer-ia.streamlit.app/",
    weight: 1,
  },
  {
    tag: "AI Engineer",
    title: "Asistente Legal RAG",
    description:
      "Sistema RAG que consulta en lenguaje natural la Constitución y los principales códigos del Perú, devolviendo respuestas fundamentadas con cita exacta de artículo y código. Retriever híbrido (MMR + MultiQuery + similitud) sobre Pinecone, con OCR selectivo en la ingesta.",
    stack: [
      "Python",
      "LangChain",
      "Pinecone",
      "RAG",
      "Tesseract OCR",
      "Streamlit",
    ],
    metrics: [
      { value: "0%", label: "alucinaciones (validado vs. Ollama local)" },
      { value: "100%", label: "respuestas con fuente citada" },
    ],
    image: "/images/projects/AsistenteLegalRAGHome.png", // pon aquí "/projects/rag-legal.png"
    imageAlt: "Asistente Legal RAG respondiendo una consulta",
    liveUrl:
      "https://jcesaraguilar-asistente-legal-rag-app-dvxyfy.streamlit.app/",
    weight: 1.3,
  },
];
