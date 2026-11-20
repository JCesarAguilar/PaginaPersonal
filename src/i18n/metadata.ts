import type { Metadata, Viewport } from "next";
import { SITE } from "@/src/data/site";
import { getContent, localePath, LOCALES, type Locale } from "./config";

// Enlaces hreflang: le dicen a Google qué URL corresponde a cada idioma.
function languages(path: string) {
  return {
    ...Object.fromEntries(LOCALES.map((l) => [l, localePath(l, path)])),
    "x-default": localePath("es", path),
  };
}

const OG_LOCALE: Record<Locale, string> = { es: "es_PE", en: "en_US" };

// Vista previa al compartir el enlace (LinkedIn, WhatsApp, X...).
// Cada página pasa su URL y título para no heredar los del inicio.
function social(
  locale: Locale,
  path: string,
  title: string,
  description: string,
) {
  return {
    openGraph: {
      type: "website" as const,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l],
      ),
      url: localePath(locale, path),
      siteName: SITE.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}

// Color de la barra del navegador en celulares.
export const viewport: Viewport = { themeColor: "#0a0a0a" };

export function siteMetadata(locale: Locale): Metadata {
  const { SITE_TEXT } = getContent(locale);
  const description = SITE_TEXT.description;
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} · ${SITE_TEXT.jobTitle}`,
      template: `%s · ${SITE.name}`,
    },
    description,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: languages("/"),
    },
    ...social(locale, "/", `${SITE.name} · AI Engineer`, description),
  };
}

export function archiveMetadata(locale: Locale): Metadata {
  const { UI } = getContent(locale);
  const { title, description } = UI.archive;
  return {
    title,
    description,
    alternates: {
      canonical: localePath(locale, "/archivo"),
      languages: languages("/archivo"),
    },
    ...social(locale, "/archivo", `${title} · ${SITE.name}`, description),
  };
}
