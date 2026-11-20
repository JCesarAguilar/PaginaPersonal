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
    name: "Sobre mí",
    route: PATHROUTES.ABOUT,
  },
  {
    name: "Experiencia",
    route: PATHROUTES.EXPERIENCE,
  },
  {
    name: "Proyectos",
    route: PATHROUTES.PROJECTS,
  },
];
