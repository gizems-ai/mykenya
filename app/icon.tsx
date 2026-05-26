import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0F0F0E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        {/* Red top stripe — Kenya flag nod */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#C8302C",
            borderRadius: "6px 6px 0 0",
          }}
        />
        {/* M lettermark */}
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 20,
            fontWeight: 400,
            color: "#FDFBF6",
            letterSpacing: "-0.04em",
            marginTop: 2,
          }}
        >
          M
        </div>
        {/* Green bottom stripe */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#1B5E3F",
            borderRadius: "0 0 6px 6px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
