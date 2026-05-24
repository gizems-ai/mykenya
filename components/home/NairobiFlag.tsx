import Image from "next/image";

export function NairobiFlag() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
      {/* Left — Nairobi photo (pexels 36048572 per design handoff) */}
      <div className="relative overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/36048572/pexels-photo-36048572.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Nairobi"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 bg-cream/90 font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
          ◇ The metro
        </div>
        <div className="absolute bottom-8 left-8 text-cream">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70 mb-2">01 · Nairobi</p>
          <h3 className="font-serif text-[clamp(32px,4vw,56px)] leading-[1] font-normal mb-3">
            The capital,{" "}
            <br />
            <em className="italic">before the wild.</em>
          </h3>
          <p className="font-sans text-sm opacity-80 max-w-[340px]">
            Creative neighborhoods, world-class coffee, giraffe at breakfast. The city earns its place in every itinerary.
          </p>
        </div>
      </div>

      {/* Right — stylized Kenya flag */}
      <div className="relative flex flex-col">
        {/* Flag stripes */}
        <div className="flex-[4] bg-ink" />
        <div className="h-2 bg-cream/20" />
        <div className="flex-[4] bg-kred" />
        <div className="h-2 bg-cream/20" />
        <div className="flex-[4] bg-kgreen" />

        {/* Maasai shield overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="200" height="280" viewBox="0 0 200 280">
            {/* Shield */}
            <path
              d="M 100 10 L 175 60 L 185 140 L 100 260 L 15 140 L 25 60 Z"
              fill="none"
              stroke="#FDFBF6"
              strokeWidth="3"
            />
            <path
              d="M 100 10 L 175 60 L 185 140 L 100 260 L 15 140 L 25 60 Z"
              fill="rgba(253,251,246,0.08)"
            />
            {/* Horizontal stripes on shield */}
            <rect x="25" y="95" width="150" height="20" fill="#FDFBF6" opacity="0.3" />
            <rect x="25" y="155" width="150" height="20" fill="#FDFBF6" opacity="0.3" />
            {/* Crossed spears */}
            <line x1="50" y1="20" x2="150" y2="260" stroke="#FDFBF6" strokeWidth="2" opacity="0.7" />
            <line x1="150" y1="20" x2="50" y2="260" stroke="#FDFBF6" strokeWidth="2" opacity="0.7" />
          </svg>
        </div>

        {/* Text overlay */}
        <div className="absolute top-4 left-4 bg-cream/90 font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
          ◇ The flag
        </div>
        <div className="absolute bottom-8 left-8 text-cream">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70 mb-2">02 · Kenya · Bendera ya</p>
          <h3 className="font-serif text-[clamp(32px,4vw,56px)] leading-[1] font-normal mb-3">
            Black, red, green —{" "}
            <br />
            <em className="italic">the country runs on it.</em>
          </h3>
          <p className="font-sans text-sm opacity-80 max-w-[320px]">
            People, blood, land. The Maasai shield at the center says: we defend what we have.
          </p>
        </div>
      </div>
    </section>
  );
}
