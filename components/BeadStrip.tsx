"use client";

export function BeadStrip({ height = 24 }: { height?: number }) {
  const h = height;
  const mid = h / 2;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='36' height='${h}' viewBox='0 0 36 ${h}'><rect width='9' height='${h}' fill='%23C8302C'/><circle cx='4.5' cy='${mid}' r='3' fill='%23FDFBF6'/><rect x='9' width='9' height='${h}' fill='%230F0F0E'/><rect x='12' y='${mid - 3}' width='6' height='6' transform='rotate(45 15 ${mid})' fill='%23E2D2AE'/><rect x='18' width='9' height='${h}' fill='%231B5E3F'/><rect x='21' y='${mid - 1}' width='6' height='2' fill='%23FDFBF6'/><rect x='27' width='9' height='${h}' fill='%23FDFBF6'/><polygon points='31.5,${mid - 4} 35,${mid + 4} 28,${mid + 4}' fill='%23C8302C'/></svg>`;

  return (
    <div
      style={{
        height: h,
        backgroundImage: `url("data:image/svg+xml,${svg}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `36px ${h}px`,
        flexShrink: 0,
      }}
    />
  );
}
