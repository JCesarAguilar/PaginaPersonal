// Archivo completo de proyectos (página /archivo).
// Ordenados del más reciente al más antiguo.
export interface ArchiveItem {
  year: number;
  title: string;
  madeAt?: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const GH = "https://github.com/JCesarAguilar";

export const ARCHIVE: ArchiveItem[] = [
  {
    year: 2026,
    title: "Lucía, recepcionista de voz con IA",
    stack: ["Python", "FastAPI", "Vapi", "Twilio", "Langfuse"],
    codeUrl: `${GH}/voice-receptionist`,
  },
  {
    year: 2026,
    title: "Comparador de contratos",
    madeAt: "Henry",
    stack: ["Python", "LangChain", "GPT-4o", "Langfuse", "Streamlit"],
    codeUrl: `${GH}/contract-comparison-agent`,
  },
  {
    year: 2026,
    title: "Soporte interno multiagente",
    madeAt: "Henry",
    stack: ["Python", "LangChain", "ChromaDB", "Langfuse"],
    codeUrl: `${GH}/multi-agent-support`,
  },
  {
    year: 2026,
    title: "Chatbot FAQ con RAG para un hostal",
    madeAt: "Henry",
    stack: ["Python", "OpenAI", "Streamlit"],
    codeUrl: `${GH}/faq_rag_chatbot`,
  },
  {
    year: 2026,
    title: "Asistente de tickets con LLM",
    stack: ["Python", "OpenAI", "Pydantic", "pytest"],
    codeUrl: `${GH}/llm-ticket-assistant`,
  },
  {
    year: 2026,
    title: "Este portafolio",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://julio-aguilar.vercel.app",
    codeUrl: `${GH}/PaginaPersonal`,
  },
  {
    year: 2026,
    title: "Asistente de soporte con prompts few-shot",
    stack: ["Python", "OpenAI", "Pydantic", "pytest"],
    codeUrl: `${GH}/multitasking-text-utility`,
  },
  {
    year: 2026,
    title: "Asistente Legal RAG",
    stack: ["Python", "LangChain", "Pinecone", "Streamlit"],
    liveUrl: "https://jcesaraguilar-asistente-legal-rag-app-dvxyfy.streamlit.app/",
    codeUrl: `${GH}/asistente_legal_RAG`,
  },
  {
    year: 2026,
    title: "CV Analyzer",
    stack: ["Python", "LangChain", "Gemini", "Pydantic", "Streamlit"],
    liveUrl: "https://cv-analyzer-ia.streamlit.app/",
    codeUrl: `${GH}/cv-analyzer`,
  },
  {
    year: 2026,
    title: "Texto a voz",
    stack: ["Python", "Streamlit", "gTTS"],
    codeUrl: `${GH}/texto-a-voz`,
  },
  {
    year: 2026,
    title: "RedLegal.pe",
    madeAt: "RedLegal.pe",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Culqi", "PostHog"],
    liveUrl: "https://redlegal.pe",
  },
  {
    year: 2026,
    title: "Alma Host",
    madeAt: "Marchand Ramos",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://alma-host-frontend.vercel.app/",
  },
  {
    year: 2026,
    title: "Marchand Ramos Contratistas Generales",
    madeAt: "Marchand Ramos",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://marchand-ramos-web.vercel.app/",
  },
  {
    year: 2026,
    title: "MatrixScreen, catálogo de películas",
    stack: ["JavaScript", "Express", "MongoDB"],
    liveUrl: "https://movieapp-matrixscreen.vercel.app",
    codeUrl: `${GH}/MovieApp-MatrixScreen-Fullstack`,
  },
  {
    year: 2025,
    title: "Ecommerce KleanColor · API",
    stack: ["NestJS", "TypeORM", "PostgreSQL", "JWT", "Swagger"],
    codeUrl: `${GH}/Ecommerce-Kleancolor-Backend`,
  },
  {
    year: 2025,
    title: "Ecommerce KleanColor",
    stack: ["React", "Vite", "Tailwind CSS"],
    liveUrl: "https://ecommerce-kleancolor-wkn4.vercel.app",
    codeUrl: `${GH}/Ecommerce-Kleancolor-Frontend`,
  },
  {
    year: 2025,
    title: "Canales Hernández Abogados",
    stack: ["Next.js", "React"],
    liveUrl: "https://landingpage-lawyer.vercel.app",
    codeUrl: `${GH}/LandingPage-Lawyer`,
  },
  {
    year: 2025,
    title: "Fund.ar, plataforma de donaciones",
    madeAt: "Henry",
    stack: ["Next.js", "TypeScript", "Clerk", "Formik"],
    liveUrl: "https://foundation-fundar.vercel.app",
    codeUrl: `${GH}/Foundation-Fundar`,
  },
  {
    year: 2025,
    title: "Ecommerce Audiophile",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "TypeORM"],
    liveUrl: "https://ecommerce-audiophile-five.vercel.app",
    codeUrl: `${GH}/Ecommerce-Audiophile`,
  },
  {
    year: 2025,
    title: "Gestor de turnos para barbería",
    stack: ["React", "Express", "PostgreSQL", "TypeORM", "Nodemailer"],
    liveUrl: "https://barberapp-fullstack.vercel.app",
    codeUrl: `${GH}/Booking-BarberApp-Fullstack`,
  },
  {
    year: 2025,
    title: "News Homepage",
    stack: ["React", "Tailwind CSS"],
    liveUrl: "https://news-homepage-kohl-delta.vercel.app/",
    codeUrl: `${GH}/LandingPage-News`,
  },
];
