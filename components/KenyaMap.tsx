"use client";

import Image from "next/image";

// Pin positions as percentage of image (left%, top%)
// Calibrated to Britannica map geography
const PINS = [
  { name: "Nairobi",    px: 28, py: 56 },
  { name: "Masai Mara", px: 18, py: 65 },
  { name: "Amboseli",   px: 31, py: 72 },
  { name: "Naivasha",   px: 23, py: 47 },
  { name: "Nanyuki",    px: 38, py: 37 },
  { name: "Watamu",     px: 58, py: 65 },
  { name: "Diani",      px: 47, py: 83 },
  { name: "Lamu",       px: 65, py: 52 },
];

interface KenyaMapProps {
  active: string;
  onSelect: (name: string) => void;
}

export function KenyaMap({ active, onSelect }: KenyaMapProps) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "712 / 648" }}>
      <Image
        src="/kenya-map.png"
        alt="Map of Kenya"
        fill
        className="object-contain"
       
      />
      {PINS.map(({ name, px, py }) => {
        const isActive = name === active;
        return (
          <button
            key={name}
            onClick={() => onSelect(name)}
            style={{
              position: "absolute",
              left: `${px}%`,
              top: `${py}%`,
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 0,
              zIndex: 2,
            }}
          >
            {/* Pulse ring for active */}
            {isActive && (
              <span style={{
                position: "absolute",
                width: 22,
                height: 22,
                borderRadius: "50%",
                border: "1.5px solid #C8302C",
                opacity: 0.5,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }} />
            )}
            <span style={{
              width: isActive ? 10 : 7,
              height: isActive ? 10 : 7,
              borderRadius: "50%",
              background: isActive ? "#C8302C" : "#0F0F0E",
              border: "1.5px solid #FDFBF6",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
              flexShrink: 0,
              display: "block",
            }} />
            <span style={{
              fontFamily: "monospace",
              fontSize: 9,
              letterSpacing: "0.05em",
              color: "#0F0F0E",
              background: "rgba(253,251,246,0.85)",
              padding: "1px 4px",
              borderRadius: 2,
              fontWeight: isActive ? 700 : 400,
              whiteSpace: "nowrap",
              lineHeight: 1.4,
            }}>
              {name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
