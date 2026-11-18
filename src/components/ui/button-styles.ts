// Jerarquía de botones. El estilo base no incluye display, gap ni padding:
// cada uso los agrega según su contexto.
export const buttonStyles = {
  // Acción principal (contactar, enviar, ver proyecto)
  primary:
    "rounded-full bg-green-main font-mono text-sm font-bold text-black-background transition-opacity hover:opacity-90 disabled:opacity-55",
  // Acción secundaria sobre fondo oscuro (navegación, ver código)
  secondary:
    "rounded-full border border-white/20 font-mono text-sm font-bold text-white-smoke transition-colors hover:border-green-main",
} as const;
