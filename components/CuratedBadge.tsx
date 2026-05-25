export function CuratedBadge({
  size = 120,
  rotate = -12,
  label = "CURATED BY HUMANS · PLANNED BY AI",
}: {
  size?: number;
  rotate?: number;
  label?: string;
}) {
  const id = `cb-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <svg viewBox="0 0 120 120" style={{ width: "100%", height: "100%" }}>
        <defs>
          <path
            id={id}
            d="M 60 60 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0"
            fill="none"
          />
        </defs>
        {/* Outer fill — cream */}
        <circle cx="60" cy="60" r="56" fill="#FDFBF6" stroke="#0F0F0E" strokeWidth="1" />
        {/* Inner ring */}
        <circle cx="60" cy="60" r="48" fill="none" stroke="#0F0F0E" strokeWidth="0.5" />
        {/* Circular text */}
        <text
          fill="#0F0F0E"
          style={{ fontSize: "9.5px", fontFamily: "var(--font-dm-mono), monospace", letterSpacing: "0.08em" }}
        >
          <textPath href={`#${id}`} startOffset="0%">
            {label} · {label}
          </textPath>
        </text>
        {/* Center bull's-eye */}
        <g transform="translate(60 60)">
          <circle r="14" fill="#C8302C" />
          <circle r="6" fill="#FDFBF6" />
          <circle r="2" fill="#0F0F0E" />
        </g>
      </svg>
    </div>
  );
}
