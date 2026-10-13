import { ImageResponse } from "next/og";
import { SITE } from "@/src/data/site";

export const alt = `${SITE.name} · ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Anillos del sonar, centrados a la derecha de la imagen.
const CX = 1010;
const CY = 315;
const RINGS = [110, 210, 310, 410];

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#0a0e0f",
        color: "#fafafa",
        padding: "72px 80px",
      }}
    >
      {RINGS.map((r) => (
        <div
          key={r}
          style={{
            position: "absolute",
            left: CX - r,
            top: CY - r,
            width: r * 2,
            height: r * 2,
            borderRadius: 9999,
            border: "2px solid rgba(61, 255, 176, 0.16)",
            display: "flex",
          }}
        />
      ))}

      {/* Punto detectado por el sonar */}
      <div
        style={{
          position: "absolute",
          left: CX + 130,
          top: CY - 150,
          width: 16,
          height: 16,
          borderRadius: 9999,
          background: "#3dffb0",
          boxShadow: "0 0 24px 6px rgba(61, 255, 176, 0.7)",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          maxWidth: 760,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#3dffb0",
          }}
        >
          AI Engineer · Full Stack
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 80, lineHeight: 1.05 }}>
            {SITE.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#93a7aa",
              marginTop: 24,
              lineHeight: 1.3,
            }}
          >
            Sistemas de IA, RAG y productos full-stack en producción.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#93a7aa" }}>
          Lima, Perú
        </div>
      </div>
    </div>,
    size,
  );
}
