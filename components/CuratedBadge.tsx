export function CuratedBadge({
  size = 130,
  rotate = -14,
  label = "CURATED BY HUMANS · PLANNED BY AI",
}: {
  size?: number;
  rotate?: number;
  label?: string;
}) {
  const r = size / 2 - 10;
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <circle cx={cx} cy={cy} r={size / 2 - 2} fill="#C8302C" />
      <circle cx={cx} cy={cy} r={size / 2 - 8} fill="none" stroke="#FDFBF6" strokeWidth="1" />
      <defs>
        <path
          id="circlePath"
          d={`M ${cx - r},${cy} a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
        />
      </defs>
      <text
        fontSize="7.5"
        fontFamily="'DM Mono', monospace"
        letterSpacing="0.15em"
        fill="#FDFBF6"
        textAnchor="start"
      >
        <textPath href="#circlePath">{label} · {label} ·</textPath>
      </text>
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fontSize="18"
        fontFamily="'Newsreader', serif"
        fill="#FDFBF6"
        fontStyle="italic"
      >
        MK
      </text>
    </svg>
  );
}
