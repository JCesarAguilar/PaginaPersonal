import type { Project } from "../types";

const GITHUB = "https://github.com/JCesarAguilar";

export const PROJECTS: Project[] = [
  {
    slug: "redlegal",
    tag: "Producto en producción",
    title: "RedLegal.pe",
    description:
      "Marketplace legal en producción que conecta a personas con abogados verificados en Perú por especialidad y ciudad, con contacto directo por WhatsApp y suscripciones de pago para abogados. Lo construí de punta a punta, del producto al despliegue.",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Culqi",
      "PostHog",
    ],
    metrics: [
      { value: "+90", label: "abogados registrados" },
      { value: "+50", label: "clientes contactaron a un abogado" },
      { value: "x3", label: "impresiones en Google en un mes" },
      { value: "16%", label: "conversión a registro en el lanzamiento" },
    ],
    image: "/images/projects/redlegal.webp",
    imageAlt: "Captura de RedLegal.pe en funcionamiento",
    liveUrl: "https://redlegal.pe",
  },
  {
    slug: "voice-receptionist",
    tag: "Agente de voz",
    title: "Lucía, recepcionista de voz con IA",
    description:
      "Agente de voz en español para un estudio de abogados: responde preguntas, revisa la agenda real, reserva la cita, cobra por WhatsApp y deriva urgencias a una persona. Arquitectura hexagonal y evaluación con golden cases en llamadas reales.",
    stack: [
      "Python",
      "FastAPI",
      "Vapi",
      "Langfuse",
      "Culqi",
      "Twilio",
      "pytest",
    ],
    metrics: [
      { value: "13/13", label: "escenarios de prueba superados" },
      { value: "US$ 0,065", label: "costo promedio por llamada" },
      { value: "136", label: "tests automatizados" },
    ],
    cover: "voice",
    codeUrl: `${GITHUB}/voice-receptionist`,
  },
  {
    slug: "alma-host",
    tag: "Sitio web",
    title: "Alma Host",
    description:
      "Sitio de un hospedaje en Pucallpa, parte del grupo Marchand Ramos. Lo construí con foco en velocidad y accesibilidad para que cualquier huésped lo use sin fricción, también desde el celular.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: [
      { value: "99/100", label: "rendimiento en Lighthouse" },
      { value: "100/100", label: "accesibilidad en Lighthouse" },
    ],
    image: "/images/projects/alma-host.webp",
    imageAlt: "Inicio del sitio web de Alma Host",
    liveUrl: "https://alma-host-frontend.vercel.app/",
  },
  {
    slug: "multi-agent-support",
    tag: "Sistema multiagente",
    title: "Soporte interno multiagente",
    description:
      "Un agente orquestador clasifica cada consulta interna y la deriva al agente RAG del área correcta (RR. HH., TI o Finanzas), que responde citando la fuente. Un agente evaluador califica cada respuesta.",
    stack: ["Python", "LangChain", "OpenAI", "Chroma", "Langfuse", "Pydantic"],
    metrics: [
      { value: "17/17", label: "consultas derivadas al área correcta" },
      { value: "8,7/10", label: "calidad promedio según el evaluador" },
    ],
    cover: "agents",
    codeUrl: `${GITHUB}/multi-agent-support`,
  },
  {
    slug: "marchand-ramos-web",
    tag: "Sitio web corporativo",
    title: "Marchand Ramos Contratistas Generales",
    description:
      "Sitio corporativo de una constructora peruana de edificaciones, viviendas y obras civiles. Me encargué del diseño, el frontend y el despliegue: servicios, portafolio de obras y contacto, con imágenes optimizadas y SEO para Google.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: [],
    image: "/images/projects/marchand-ramos.webp",
    imageAlt: "Inicio del sitio web de Marchand Ramos Contratistas Generales",
    liveUrl: "https://marchand-ramos-web.vercel.app/",
  },
  {
    slug: "contract-comparison-agent",
    tag: "Sistema multiagente",
    title: "Comparador de contratos",
    description:
      "Recibe las imágenes escaneadas de un contrato y su enmienda, las transcribe con GPT-4o (visión) y dos agentes detectan cada cambio legal. Devuelve un JSON validado y cada paso queda trazado en Langfuse.",
    stack: ["Python", "LangChain", "GPT-4o", "Pydantic", "Langfuse", "pytest"],
    metrics: [
      { value: "14/14", label: "cambios detectados, sin falsos positivos" },
      { value: "~9 s", label: "por comparación" },
      { value: "−40%", label: "de latencia tras optimizar con datos" },
    ],
    cover: "compare",
    codeUrl: `${GITHUB}/contract-comparison-agent`,
  },
  {
    slug: "asistente-legal-rag",
    tag: "RAG",
    title: "Asistente Legal RAG",
    description:
      "Consulta en lenguaje natural la Constitución y los principales códigos del Perú, con cita exacta de artículo y código. Retriever híbrido (MMR + MultiQuery + similitud) sobre Pinecone y OCR selectivo en la ingesta.",
    stack: [
      "Python",
      "LangChain",
      "Pinecone",
      "RAG",
      "Tesseract OCR",
      "Streamlit",
    ],
    metrics: [{ value: "100%", label: "respuestas con fuente citada" }],
    image: "/images/projects/asistente-legal-rag.webp",
    imageAlt: "Asistente Legal RAG respondiendo una consulta",
    liveUrl:
      "https://jcesaraguilar-asistente-legal-rag-app-dvxyfy.streamlit.app/",
    codeUrl: `${GITHUB}/asistente_legal_RAG`,
  },
];
