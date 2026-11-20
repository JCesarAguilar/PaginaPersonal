import type { Metadata } from "next";
import { SITE } from "@/src/data/site";
import { getContent, localePath, LOCALES, type Locale } from "./config";

// Enlaces hreflang: le dicen a Google qué URL corresponde a cada idioma.
function languages(path: string) {
  return {
    ...Object.fromEntries(LOCALES.map((l) => [l, localePath(l, path)])),
    "x-default": localePath("es", path),
  };
}

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
    alternates: {
      canonical: localePath(locale, "/"),
      languages: languages("/"),
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_PE" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_PE",
      url: localePath(locale, "/"),
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
}

export function archiveMetadata(locale: Locale): Metadata {
  const { UI } = getContent(locale);
  return {
    title: UI.archive.title,
    description: UI.archive.description,
    alternates: {
      canonical: localePath(locale, "/archivo"),
      languages: languages("/archivo"),
    },
  };
}
