export enum PATHROUTES {
  HOME = "/",
  ABOUT = "#sobre-mi",
  PROJECTS = "#proyectos",
  SOLUTIONS = "#servicios",
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
    name: "Soluciones",
    route: PATHROUTES.SOLUTIONS,
  },

  {
    name: "Contacto",
    route: PATHROUTES.CONTACT,
  },
];
