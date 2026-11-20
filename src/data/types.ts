// Formas de los datos; cada idioma (es/, en/) las llena con su texto.
export interface Experience {
  period: string;
  role: string;
  company: string;
  url?: string;
  description: string;
  stack: string[];
}

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
  // Sin imagen, la tarjeta muestra una portada con el ícono de "cover".
  image?: string;
  cover?: "voice" | "compare" | "agents";
  imageAlt?: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface ArchiveItem {
  year: number;
  title: string;
  madeAt?: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
}
