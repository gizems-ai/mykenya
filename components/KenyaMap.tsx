"use client";

const PINS = [
  { name: "Nairobi", x: 255, y: 285 },
  { name: "Masai Mara", x: 185, y: 320 },
  { name: "Amboseli", x: 270, y: 355 },
  { name: "Naivasha", x: 235, y: 270 },
  { name: "Nanyuki", x: 270, y: 235 },
  { name: "Watamu", x: 360, y: 290 },
  { name: "Diani", x: 330, y: 360 },
  { name: "Lamu", x: 395, y: 240 },
];

interface KenyaMapProps {
  active: string;
  onSelect: (name: string) => void;
}

export function KenyaMap({ active, onSelect }: KenyaMapProps) {
  return (
    <svg
      viewBox="0 0 520 480"
      style={{ width: "100%", height: "auto" }}
      role="img"
      aria-label="Map of Kenya"
    >
      {/* Kenya outline — simplified */}
      <path
        d="M 155 60 L 200 55 L 260 58 L 330 70 L 390 90 L 430 130 L 450 170 L 460 210 L 455 250 L 430 280 L 410 310 L 390 340 L 370 380 L 340 420 L 310 450 L 280 460 L 250 455 L 220 440 L 200 410 L 185 380 L 170 340 L 150 300 L 130 260 L 120 220 L 115 180 L 120 140 L 135 100 Z"
        fill="#F7F2E6"
        stroke="#0F0F0E"
        strokeWidth="1.5"
      />
      {/* Lake Turkana */}
      <ellipse cx="210" cy="130" rx="18" ry="45" fill="#9BB4B8" opacity="0.6" />
      {/* Lake Victoria (indent) */}
      <path d="M 115 290 Q 140 310 155 330 L 130 340 Z" fill="#9BB4B8" opacity="0.6" />
      {/* Equator */}
      <line x1="120" y1="265" x2="460" y2="265" stroke="#0F0F0E" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.35" />
      <text x="465" y="268" fontSize="8" fontFamily="monospace" fill="#0F0F0E" opacity="0.4">EQ</text>
      {/* Neighbour labels */}
      {[
        { label: "Ethiopia", x: 280, y: 48 },
        { label: "Somalia", x: 420, y: 200 },
        { label: "Tanzania", x: 250, y: 470 },
        { label: "Uganda", x: 92, y: 280 },
        { label: "S. Sudan", x: 160, y: 42 },
        { label: "Indian Ocean", x: 440, y: 390 },
      ].map(({ label, x, y }) => (
        <text key={label} x={x} y={y} fontSize="8" fontFamily="monospace" fill="#0F0F0E" opacity="0.4" textAnchor="middle">
          {label}
        </text>
      ))}
      {/* Pins */}
      {PINS.map(({ name, x, y }) => {
        const isActive = name === active;
        return (
          <g key={name} style={{ cursor: "pointer" }} onClick={() => onSelect(name)}>
            {isActive && (
              <circle cx={x} cy={y} r={14} fill="none" stroke="#C8302C" strokeWidth="1.5" opacity="0.5" />
            )}
            <circle
              cx={x}
              cy={y}
              r={isActive ? 6 : 4}
              fill={isActive ? "#C8302C" : "#0F0F0E"}
              stroke="#FDFBF6"
              strokeWidth="1"
            />
            <text
              x={x + 8}
              y={y + 4}
              fontSize={isActive ? 9 : 8}
              fontFamily="monospace"
              fill="#0F0F0E"
              fontWeight={isActive ? "600" : "400"}
            >
              {name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
