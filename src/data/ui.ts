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
    desktopLabel: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    goHome: "ir al inicio",
  },
  downloadCv: "Descargar CV",
  newTab: "(se abre en una pestaña nueva)",
  techList: "Tecnologías",
  viewProject: "Ver proyecto",
  viewCode: "Ver código",
  codeLinkLabel: (title: string) =>
    `de ${title} en GitHub (se abre en una pestaña nueva)`,
} as const;
