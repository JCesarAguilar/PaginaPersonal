export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  metrics: Metric[];
  // Sin imagen, la tarjeta muestra la métrica principal como portada.
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  codeUrl?: string;
}

const GITHUB = "https://github.com/JCesarAguilar";

export const PROJECTS: Project[] = [
  {
    slug: "redlegal",
    tag: "Producto en producción",
    title: "RedLegal.pe",
    description:
      "Marketplace legal en producción que conecta a personas con abogados verificados en Perú por especialidad y ciudad, con contacto directo por WhatsApp y suscripciones de pago para abogados. Lo fundé y lo construyo de punta a punta: producto, arquitectura, backend, frontend, despliegue y crecimiento. Con Next.js genero más de 150 landing pages por especialidad y ciudad indexadas en Google; una API modular en NestJS sobre PostgreSQL resuelve las búsquedas con filtros múltiples, y mido el embudo con eventos en PostHog para decidir con datos.",
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
    stack: ["Python", "FastAPI", "Vapi", "Langfuse", "Culqi", "Twilio", "pytest"],
    metrics: [
      { value: "13/13", label: "escenarios de prueba superados" },
      { value: "US$ 0,065", label: "costo promedio por llamada" },
      { value: "136", label: "tests automatizados" },
    ],
    codeUrl: `${GITHUB}/voice-receptionist`,
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
    codeUrl: `${GITHUB}/contract-comparison-agent`,
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
    codeUrl: `${GITHUB}/multi-agent-support`,
  },
  {
    slug: "asistente-legal-rag",
    tag: "RAG",
    title: "Asistente Legal RAG",
    description:
      "Consulta en lenguaje natural la Constitución y los principales códigos del Perú, con cita exacta de artículo y código. Retriever híbrido (MMR + MultiQuery + similitud) sobre Pinecone y OCR selectivo en la ingesta.",
    stack: ["Python", "LangChain", "Pinecone", "RAG", "Tesseract OCR", "Streamlit"],
    metrics: [{ value: "100%", label: "respuestas con fuente citada" }],
    image: "/images/projects/asistente-legal-rag.webp",
    imageAlt: "Asistente Legal RAG respondiendo una consulta",
    liveUrl:
      "https://jcesaraguilar-asistente-legal-rag-app-dvxyfy.streamlit.app/",
    codeUrl: `${GITHUB}/asistente_legal_RAG`,
  },
];
