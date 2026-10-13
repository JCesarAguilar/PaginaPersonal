export enum PATHROUTES {
  HOME = "/",
  ABOUT = "#sobre-mi",
  PROJECTS = "#proyectos",
  STACK = "#stack",
  CONTACT = "#contacto",
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
    name: "Proyectos",
    route: PATHROUTES.PROJECTS,
  },
  {
    name: "Stack",
    route: PATHROUTES.STACK,
  },

  {
    name: "Contacto",
    route: PATHROUTES.CONTACT,
  },
];
