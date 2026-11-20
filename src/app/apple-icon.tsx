import { ImageResponse } from "next/og";
import { SITE } from "@/src/data/site";

// Ícono al guardar la página en la pantalla de inicio del celular.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#3dffb0",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        {SITE.initials}
      </div>
    ),
    size,
  );
}
