export interface StackItem {
  name: string;
  // Ruta local en /public. Sin ícono, se muestran las iniciales.
  iconSrc?: string;
}

export interface StackCategory {
  label: string;
  items: StackItem[];
}

const STACK_ICONS = "/images/logos/stack";

export const STACK_CATEGORIES: StackCategory[] = [
  {
    label: "Inteligencia artificial",
    items: [
      { name: "LLMs", iconSrc: "/images/logos/openai-icon.webp" },
      { name: "LangChain", iconSrc: "/images/logos/langchain-icon.webp" },
      { name: "RAG", iconSrc: "/images/logos/rag-i.jpg" },
      { name: "Pinecone", iconSrc: "/images/logos/pinecone-icon.png" },
      { name: "ChromaDB", iconSrc: "/images/logos/chromadb-icon.png" },
      { name: "Langfuse" },
      { name: "Pydantic", iconSrc: `${STACK_ICONS}/pydantic.svg` },
      { name: "Vapi" },
    ],
  },
  {
    label: "Lenguajes",
    items: [
      { name: "Python", iconSrc: `${STACK_ICONS}/python.svg` },
      { name: "TypeScript", iconSrc: `${STACK_ICONS}/typescript.svg` },
      { name: "JavaScript", iconSrc: `${STACK_ICONS}/javascript.svg` },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI", iconSrc: `${STACK_ICONS}/fastapi.svg` },
      { name: "Node.js", iconSrc: `${STACK_ICONS}/nodedotjs.svg` },
      { name: "NestJS", iconSrc: `${STACK_ICONS}/nestjs.svg` },
      { name: "PostgreSQL", iconSrc: `${STACK_ICONS}/postgresql.svg` },
      { name: "MongoDB", iconSrc: `${STACK_ICONS}/mongodb.svg` },
      { name: "Docker", iconSrc: `${STACK_ICONS}/docker.svg` },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", iconSrc: `${STACK_ICONS}/nextdotjs.svg` },
      { name: "React", iconSrc: `${STACK_ICONS}/react.svg` },
      { name: "Tailwind CSS", iconSrc: `${STACK_ICONS}/tailwindcss.svg` },
    ],
  },
  {
    label: "Herramientas y calidad",
    items: [
      { name: "Git", iconSrc: `${STACK_ICONS}/git.svg` },
      { name: "GitHub", iconSrc: `${STACK_ICONS}/github.svg` },
      { name: "Vercel", iconSrc: `${STACK_ICONS}/vercel.svg` },
      { name: "pytest", iconSrc: `${STACK_ICONS}/pytest.svg` },
      { name: "Jest", iconSrc: `${STACK_ICONS}/jest.svg` },
      { name: "Postman", iconSrc: `${STACK_ICONS}/postman.svg` },
    ],
  },
];
