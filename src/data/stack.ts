export interface StackItem {
  name: string;
  iconSrc: string; // ruta local en /public, ej: "/images/logos/stack/react.svg"
}

export interface StackCategory {
  label: string;
  items: StackItem[];
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    label: "Lenguajes",
    items: [
      { name: "Python", iconSrc: "/images/logos/stack/python.svg" },
      { name: "TypeScript", iconSrc: "/images/logos/stack/typescript.svg" },
      { name: "JavaScript", iconSrc: "/images/logos/stack/javascript.svg" },
    ],
  },
  {
    label: "AI Engineer",
    items: [
      { name: "LLMs", iconSrc: "/images/logos/openai-icon.webp" },
      { name: "LangChain", iconSrc: "/images/logos/langchain-icon.webp" },
      { name: "RAG", iconSrc: "/images/logos/rag-i.jpg" },
      { name: "Pinecone", iconSrc: "/images/logos/pinecone-icon.png" },
      { name: "ChromaDB", iconSrc: "/images/logos/chromadb-icon.png" },
    ],
  },
  {
    label: "Full Stack",
    items: [
      { name: "Next.js", iconSrc: "/images/logos/stack/nextdotjs.svg" },
      { name: "React", iconSrc: "/images/logos/stack/react.svg" },
      { name: "NestJS", iconSrc: "/images/logos/stack/nestjs.svg" },
      { name: "PostgreSQL", iconSrc: "/images/logos/stack/postgresql.svg" },
      { name: "MongoDB", iconSrc: "/images/logos/stack/mongodb.svg" },
      { name: "Tailwind CSS", iconSrc: "/images/logos/stack/tailwindcss.svg" },
    ],
  },
  {
    label: "Herramientas",
    items: [
      //   { name: "Docker", iconSrc: "/images/logos/stack/docker.svg" },
      { name: "Git", iconSrc: "/images/logos/stack/git.svg" },
      { name: "GitHub", iconSrc: "/images/logos/stack/github.svg" },
      { name: "Vercel", iconSrc: "/images/logos/stack/vercel.svg" },
      { name: "Postman", iconSrc: "/images/logos/stack/postman.svg" },
    ],
  },
];
