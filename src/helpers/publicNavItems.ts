import { getContent, type Locale } from "@/src/i18n/config";

// Los ids de sección son los mismos en ambos idiomas.
export enum PATHROUTES {
  ABOUT = "#sobre-mi",
  EXPERIENCE = "#experiencia",
  PROJECTS = "#proyectos",
}

export function toSectionId(route: PATHROUTES): string {
  return route.replace("#", "");
}

export function getNavItems(locale: Locale) {
  const { UI } = getContent(locale);
  return [
    { name: UI.sections.about, route: PATHROUTES.ABOUT },
    { name: UI.sections.experience, route: PATHROUTES.EXPERIENCE },
    { name: UI.sections.projects, route: PATHROUTES.PROJECTS },
  ];
}
