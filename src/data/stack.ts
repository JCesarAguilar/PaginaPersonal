export interface StackItem {
  name: string;
  iconSrc?: string; // ej: "/logos/langchain.svg" — si no la das, usa el CDN
}

export interface StackCategory {
  label: string;
  items: StackItem[];
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    label: "Lenguajes",
    items: [{ name: "python" }, { name: "typescript" }, { name: "javascript" }],
  },
  {
    label: "AI Engineer",
    items: [
      { name: "LLMs", iconSrc: "/images/logos/openai-icon.webp" },
      { name: "langchain", iconSrc: "/images/logos/langchain-icon.webp" },
      { name: "RAG", iconSrc: "/images/logos/rag-i.jpg" },
      { name: "pinecone", iconSrc: "/images/logos/pinecone-icon.png" },
      { name: "chromadb", iconSrc: "/images/logos/chromadb-icon.png" },
    ],
  },
  {
    label: "Full Stack",
    items: [
      { name: "next.js" },
      { name: "react" },
      { name: "nestjs" },
      { name: "postgreSQL" },
      { name: "mongoDB" },
      { name: "tailwindCSS" },
    ],
  },
  {
    label: "Herramientas",
    items: [
      //   { name: "docker" },
      { name: "git" },
      { name: "github" },
      { name: "vercel" },
      { name: "postman" },
    ],
  },
];
