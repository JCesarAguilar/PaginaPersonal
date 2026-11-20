import type { MetadataRoute } from "next";
import { SITE } from "@/src/data/site";
import { LOCALES, localePath } from "@/src/i18n/config";

const PAGES = [
  { path: "/", priority: 1 },
  { path: "/archivo", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority }) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}${localePath(locale, path) === "/" ? "" : localePath(locale, path)}`,
      lastModified: new Date(),
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [
            l,
            `${SITE.url}${localePath(l, path) === "/" ? "" : localePath(l, path)}`,
          ]),
        ),
      },
    })),
  );
}
