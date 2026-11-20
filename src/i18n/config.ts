import { en } from "@/src/data/en";
import { es, type Content } from "@/src/data/es";

// Español es el idioma por defecto (sin prefijo); inglés vive bajo /en.
export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

const CONTENT: Record<Locale, Content> = { es, en };

export function getContent(locale: Locale): Content {
  return CONTENT[locale];
}

// localePath("en", "/archivo") -> "/en/archivo"; localePath("es", "/") -> "/"
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
