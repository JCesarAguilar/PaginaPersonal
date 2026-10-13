import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { SITE } from "@/src/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const description =
  "AI Engineer y desarrollador full-stack en Lima. Construyo sistemas RAG, agentes con LLMs y productos web en producción. Antes, 16 años en la Marina del Perú.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · AI Engineer y desarrollador full-stack`,
    template: `%s · ${SITE.name}`,
  },
  description,
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: SITE.name,
    title: `${SITE.name} · AI Engineer`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · AI Engineer`,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        jetBrainsMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
