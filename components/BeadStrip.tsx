"use client";

export function BeadStrip({ height = 24 }: { height?: number }) {
  const tile = `
    <svg xmlns='http://www.w3.org/2000/svg' width='36' height='${height}' viewBox='0 0 36 ${height}'>
      <rect width='9' height='${height}' fill='%23C8302C'/>
      <circle cx='4.5' cy='${height / 2}' r='3' fill='%23FDFBF6'/>
      <rect x='9' width='9' height='${height}' fill='%230F0F0E'/>
      <rect x='12' y='${height / 2 - 3}' width='6' height='6' transform='rotate(45 15 ${height / 2})' fill='%23E2D2AE'/>
      <rect x='18' width='9' height='${height}' fill='%231B5E3F'/>
      <rect x='21' y='${height / 2 - 2}' width='12' height='2' fill='%23FDFBF6'/>
      <rect x='27' width='9' height='${height}' fill='%23FDFBF6'/>
      <polygon points='31.5,${height / 2 - 4} 35,${height / 2 + 4} 28,${height / 2 + 4}' fill='%23C8302C'/>
    </svg>
  `;
  const encoded = `url("data:image/svg+xml,${tile.trim()}")`;

  return (
    <div
      style={{
        height,
        backgroundImage: encoded,
        backgroundRepeat: "repeat-x",
        backgroundSize: `36px ${height}px`,
      }}
    />
  );
}
