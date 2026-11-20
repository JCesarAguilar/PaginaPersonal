import type { Project } from "../types";

const GITHUB = "https://github.com/JCesarAguilar";

export const PROJECTS: Project[] = [
  {
    slug: "redlegal",
    tag: "Product in production",
    title: "RedLegal.pe",
    description:
      "Live legal marketplace that connects people in Peru with verified lawyers by practice area and city, with direct WhatsApp contact and paid subscriptions for lawyers. I built it end to end, from product to deployment.",
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
      { value: "+90", label: "registered lawyers" },
      { value: "+50", label: "clients contacted a lawyer" },
      { value: "x3", label: "Google impressions in one month" },
      { value: "16%", label: "sign-up conversion at launch" },
    ],
    image: "/images/projects/redlegal.webp",
    imageAlt: "Screenshot of RedLegal.pe in use",
    liveUrl: "https://redlegal.pe",
  },
  {
    slug: "voice-receptionist",
    tag: "Voice agent",
    title: "Lucía, AI voice receptionist",
    description:
      "Spanish-speaking voice agent for a law firm: it answers questions, checks the real calendar, books the appointment, collects payment over WhatsApp and hands urgent cases to a person. Hexagonal architecture, evaluated with golden cases on real calls.",
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
      { value: "13/13", label: "test scenarios passed" },
      { value: "US$ 0.065", label: "average cost per call" },
      { value: "136", label: "automated tests" },
    ],
    cover: "voice",
    codeUrl: `${GITHUB}/voice-receptionist`,
  },
  {
    slug: "alma-host",
    tag: "Website",
    title: "Alma Host",
    description:
      "Website for a guesthouse in Pucallpa, part of the Marchand Ramos group. I built it with a focus on speed and accessibility so any guest can use it without friction, including on their phone.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: [
      { value: "99/100", label: "Lighthouse performance" },
      { value: "100/100", label: "Lighthouse accessibility" },
    ],
    image: "/images/projects/alma-host.webp",
    imageAlt: "Alma Host website home page",
    liveUrl: "https://alma-host-frontend.vercel.app/",
  },
  {
    slug: "multi-agent-support",
    tag: "Multi-agent system",
    title: "Multi-agent internal support",
    description:
      "An orchestrator agent classifies each internal question and routes it to the RAG agent for the right team (HR, IT or Finance), which answers citing its source. An evaluator agent scores every answer.",
    stack: ["Python", "LangChain", "OpenAI", "Chroma", "Langfuse", "Pydantic"],
    metrics: [
      { value: "17/17", label: "questions routed to the right team" },
      { value: "8.7/10", label: "average quality per the evaluator" },
    ],
    cover: "agents",
    codeUrl: `${GITHUB}/multi-agent-support`,
  },
  {
    slug: "marchand-ramos-web",
    tag: "Corporate website",
    title: "Marchand Ramos Contratistas Generales",
    description:
      "Corporate website for a Peruvian construction company building commercial buildings, housing and civil works. I handled design, frontend and deployment: services, project portfolio and contact, with optimized images and SEO for Google.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: [],
    image: "/images/projects/marchand-ramos.webp",
    imageAlt: "Marchand Ramos Contratistas Generales website home page",
    liveUrl: "https://marchand-ramos-web.vercel.app/",
  },
  {
    slug: "contract-comparison-agent",
    tag: "Multi-agent system",
    title: "Contract comparison agent",
    description:
      "Takes the scanned images of a contract and its amendment, transcribes them with GPT-4o vision, and two agents detect every legal change. It returns validated JSON, with every step traced in Langfuse.",
    stack: ["Python", "LangChain", "GPT-4o", "Pydantic", "Langfuse", "pytest"],
    metrics: [
      { value: "14/14", label: "changes detected, no false positives" },
      { value: "~9 s", label: "per comparison" },
      { value: "−40%", label: "latency after data-driven tuning" },
    ],
    cover: "compare",
    codeUrl: `${GITHUB}/contract-comparison-agent`,
  },
  {
    slug: "asistente-legal-rag",
    tag: "RAG",
    title: "Legal RAG assistant",
    description:
      "Ask Peru's Constitution and main legal codes in plain language and get the exact article and code cited. Hybrid retriever (MMR + MultiQuery + similarity) on Pinecone, with selective OCR at ingestion.",
    stack: [
      "Python",
      "LangChain",
      "Pinecone",
      "RAG",
      "Tesseract OCR",
      "Streamlit",
    ],
    metrics: [{ value: "100%", label: "answers with a cited source" }],
    image: "/images/projects/asistente-legal-rag.webp",
    imageAlt: "Legal RAG assistant answering a question",
    liveUrl:
      "https://jcesaraguilar-asistente-legal-rag-app-dvxyfy.streamlit.app/",
    codeUrl: `${GITHUB}/asistente_legal_RAG`,
  },
];
