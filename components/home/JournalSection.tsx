import { JOURNAL } from "@/lib/data";

export function JournalSection() {
  return (
    <section className="py-[100px] px-14 bg-cream">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 border-b border-ink/10 pb-6">
        <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-normal tracking-[-0.02em]">
          From the <em className="italic">journal.</em>
        </h2>
        <a href="/journal" className="font-mono text-sm tracking-[0.1em] uppercase hover:underline opacity-60">
          All field notes →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {JOURNAL.map((entry) => (
          <a
            key={entry.slug}
            href={`/journal/${entry.slug}`}
            className="group flex flex-col border-t border-ink/20 pt-5 hover:border-kred transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-50">{entry.kicker}</span>
              <span className="font-mono text-[10px] text-kred">{entry.time}</span>
            </div>
            <h3 className="font-serif text-[22px] leading-[1.1] font-normal flex-1 mb-4 group-hover:text-kred transition-colors">
              {entry.title}
            </h3>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">
              Read →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
