import type { Content } from "../es";

// Interface text: menu, buttons, section titles and screen-reader labels.
export const UI: Content["UI"] = {
  sections: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
  },
  nav: {
    sectionsLabel: "Sections",
    mainLabel: "Main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    goHome: "go to home page",
  },
  language: "Language",
  downloadCv: "Download CV",
  newTab: "(opens in a new tab)",
  techList: "Technologies",
  viewProject: "View project",
  viewCode: "View code",
  archive: {
    link: "Link",
    cta: "View full project archive",
    title: "All projects",
    description:
      "Everything I've built, from my first websites to AI systems in production.",
    year: "Year",
    project: "Project",
    madeAt: "Made at",
    builtWith: "Built with",
  },
  codeLinkLabel: (title: string) =>
    `for ${title} on GitHub (opens in a new tab)`,
};
