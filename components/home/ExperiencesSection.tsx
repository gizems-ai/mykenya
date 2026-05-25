import Link from "next/link";

const EXPERIENCES = [
  { tag: "01", title: "Safari", note: "Private camps, ranger-led drives." },
  { tag: "02", title: "Beach Escapes", note: "Indian Ocean barefoot luxury." },
  { tag: "03", title: "Wellness", note: "Coastal retreats and bush spas." },
  { tag: "04", title: "Honeymoons", note: "Bush, beach, and quiet between." },
  { tag: "05", title: "Digital Nomad Stays", note: "Long-stay homes with fibre." },
  { tag: "06", title: "Family Journeys", note: "Logistics simplified, kid-tested." },
  { tag: "07", title: "Private Villas", note: "Hand-picked houses with crew." },
  { tag: "08", title: "Photography", note: "Light, guides, the right hours." },
];

const ACCENT_COLORS = ["#C8302C", "#1B5E3F", "#0F0F0E", "#E2D2AE"];

export function ExperiencesSection() {
  return (
    <section className="py-[100px] px-14 bg-cream">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-kred mb-5">
            § Curated experiences
          </p>
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-[0.96] font-normal tracking-[-0.02em]">
            Built around <em className="italic text-kgreen">how</em>
            <br />
            you want to feel.
          </h2>
        </div>
        <Link
          href="/experiences"
          className="font-mono text-[11px] tracking-[0.15em] uppercase border-b border-ink/40 pb-1 hover:border-ink transition-colors"
        >
          All 8 experiences →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {EXPERIENCES.map((e, i) => {
          const accent = ACCENT_COLORS[i % 4];
          const isLight = accent === "#E2D2AE";
          return (
            <Link
              key={e.tag}
              href="/experiences"
              style={{
                background: accent,
                color: isLight ? "#0F0F0E" : "#FDFBF6",
                aspectRatio: "1 / 1.15",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
              }}
            >
              <span
                className="font-mono text-[11px] tracking-[0.15em]"
                style={{ opacity: 0.8 }}
              >
                {e.tag} ·
              </span>
              <div>
                <h3 className="font-serif text-[32px] leading-[1.05] font-normal">
                  {e.title}
                </h3>
                <p className="font-sans text-[12px] leading-relaxed mt-3" style={{ opacity: 0.85 }}>
                  {e.note}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
