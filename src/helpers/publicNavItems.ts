export enum PATHROUTES {
  HOME = "/",
  SOLUTIONS = "/services",
  PROJECTS = "/projects",
  ABOUT = "/about",
  CONTACT = "/contact",
}

export const publicNavItems = [
  {
    name: "Sobre mí",
    route: PATHROUTES.ABOUT,
  },
  {
    name: "Soluciones",
    route: PATHROUTES.SOLUTIONS,
  },
  {
    name: "Proyectos",
    route: PATHROUTES.PROJECTS,
  },
  {
    name: "Contacto",
    route: PATHROUTES.CONTACT,
  },
];
