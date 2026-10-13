import { useSyncExternalStore } from "react";

/**
 * Lee un media query sin romper la hidratación.
 * En el servidor (y en el primer render del cliente) devuelve `serverValue`;
 * luego React lo actualiza con el valor real del navegador.
 */
export function useMediaQuery(query: string, serverValue = false): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}
