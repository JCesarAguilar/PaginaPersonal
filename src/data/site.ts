// Datos personales que no cambian con el idioma.
// Los textos traducibles están en src/data/es y src/data/en.
export const SITE = {
  name: "Julio Aguilar",
  url: "https://julio-aguilar.vercel.app",
  initials: "JA",
  cvUrl: "/CV_Julio_Aguilar.pdf",
  social: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/julio-cesar-aguilar-dev",
    },
    { name: "GitHub", icon: "github", url: "https://github.com/JCesarAguilar" },
  ],
} as const;
