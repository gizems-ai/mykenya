import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MyKenya — Curated Kenya Travel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px 80px",
          background: "#0F0F0E",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.45,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(15,15,14,0.95) 40%, rgba(15,15,14,0.3) 100%)",
          }}
        />

        {/* Top bar accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "#C8302C" }} />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            <div style={{ width: 12, height: 36, background: "rgba(253,251,246,0.2)" }} />
            <div style={{ width: 12, height: 36, background: "#C8302C" }} />
            <div style={{ width: 12, height: 36, background: "#1B5E3F" }} />
          </div>
          <div style={{ fontSize: 80, color: "#FDFBF6", lineHeight: 0.95, letterSpacing: -2 }}>
            MyKenya
          </div>
          <div style={{ fontSize: 26, color: "rgba(253,251,246,0.65)", letterSpacing: 1 }}>
            Kenya, beyond the ordinary.
          </div>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8, marginTop: 12,
              background: "#C8302C", color: "#FDFBF6",
              padding: "10px 24px", borderRadius: 999, width: "fit-content",
              fontSize: 16, letterSpacing: 2,
            }}
          >
            CURATED TRAVEL · EST. 2026
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
