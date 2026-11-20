// Textos de la interfaz: menú, botones, títulos de sección y etiquetas
// para lectores de pantalla. El contenido sobre ti está en los demás
// archivos de src/data.
export const UI = {
  sections: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
  },
  nav: {
    sectionsLabel: "Secciones",
    mainLabel: "Menú principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    goHome: "ir al inicio",
  },
  downloadCv: "Descargar CV",
  newTab: "(se abre en una pestaña nueva)",
  techList: "Tecnologías",
  viewProject: "Ver proyecto",
  viewCode: "Ver código",
  archive: {
    link: "Enlace",
    cta: "Ver archivo completo de proyectos",
    title: "Todos los proyectos",
    description:
      "Lo que he construido, de los primeros sitios web a los sistemas de IA en producción.",
    year: "Año",
    project: "Proyecto",
    madeAt: "Hecho en",
    builtWith: "Tecnologías",
  },
  codeLinkLabel: (title: string) =>
    `de ${title} en GitHub (se abre en una pestaña nueva)`,
} as const;
