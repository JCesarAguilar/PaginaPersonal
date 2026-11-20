import { UI } from "@/src/data/ui";

export enum PATHROUTES {
  HOME = "/",
  ABOUT = "#sobre-mi",
  EXPERIENCE = "#experiencia",
  PROJECTS = "#proyectos",
}

export function toSectionId(route: PATHROUTES): string {
  return route.replace("#", "");
}

export const publicNavItems = [
  {
    name: UI.sections.about,
    route: PATHROUTES.ABOUT,
  },
  {
    name: UI.sections.experience,
    route: PATHROUTES.EXPERIENCE,
  },
  {
    name: UI.sections.projects,
    route: PATHROUTES.PROJECTS,
  },
];
