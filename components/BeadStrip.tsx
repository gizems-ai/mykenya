"use client";

// Four-tile Maasai-inspired bead pattern matching the handoff design
export function BeadStrip({ height = 32 }: { height?: number }) {
  const red = "#C8302C";
  const green = "#1B5E3F";
  const black = "#0F0F0E";
  const cream = "#FDFBF6";
  const sand = "#E2D2AE";

  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 32' preserveAspectRatio='none'>` +
    // Tile 1 — red bg, cream circle
    `<rect width='32' height='32' fill='${red}'/>` +
    `<circle cx='16' cy='16' r='7' fill='${cream}'/>` +
    // Tile 2 — black bg, sand diamond
    `<rect x='32' width='32' height='32' fill='${black}'/>` +
    `<polygon points='48,5 59,16 48,27 37,16' fill='${sand}'/>` +
    // Tile 3 — green bg, cream stripe
    `<rect x='64' width='32' height='32' fill='${green}'/>` +
    `<rect x='78' width='4' height='32' fill='${cream}'/>` +
    // Tile 4 — cream bg, red triangle
    `<rect x='96' width='32' height='32' fill='${cream}'/>` +
    `<polygon points='96,0 128,0 112,32' fill='${red}'/>` +
    `</svg>`;

  const url = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return (
    <div
      aria-hidden
      style={{
        width: "100%",
        height,
        backgroundImage: `url("${url}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: `144px ${height}px`,
        display: "block",
        flexShrink: 0,
      }}
    />
  );
}
