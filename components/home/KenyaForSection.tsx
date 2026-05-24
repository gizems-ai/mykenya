import Image from "next/image";
import { KENYA_FOR } from "@/lib/data";

export function KenyaForSection() {
  return (
    <section className="py-[120px] px-14 bg-kred text-cream">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: "#E2D2AE" }}>
            § Kenya for ___
          </p>
          <h2 className="font-serif text-[clamp(40px,5.5vw,72px)] leading-[0.96] font-normal tracking-[-0.025em]">
            Tell us who you are.{" "}
            <br />
            <em className="italic">We&apos;ll tell you Kenya.</em>
          </h2>
        </div>
        <p className="font-mono text-[11px] leading-relaxed opacity-70 max-w-[280px] text-right hidden md:block">
          Every traveler finds a different Kenya. Which one is yours?
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {KENYA_FOR.map((item, i) => {
          const accent = item.accentColor;
          const imgSrc = Array.isArray(item.img) ? item.img[0] : item.img;
          return (
            <div
              key={item.who}
              className="bg-cream text-ink group cursor-pointer hover:-translate-y-1 transition-transform duration-200"
              style={{ borderTop: `5px solid ${accent}` }}
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={item.who}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <span
                  className="absolute top-3 left-3 bg-cream font-mono text-[9px] tracking-[0.12em] uppercase px-2 py-1"
                >
                  No. {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-5 py-4">
                <p
                  className="font-mono text-[10px] tracking-[0.15em] uppercase mb-1"
                  style={{ color: accent }}
                >
                  Kenya for
                </p>
                <h3 className="font-serif text-[28px] leading-none font-normal mb-1">{item.who}</h3>
                <p className="font-mono text-[9px] tracking-[0.1em] uppercase opacity-50 mb-2">{item.where}</p>
                <p className="font-sans text-[13px] leading-relaxed opacity-75">{item.note}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#planner"
          className="inline-block bg-cream text-ink font-sans text-sm font-bold tracking-[0.08em] uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Tell us what you&apos;re into — get a plan →
        </a>
      </div>
    </section>
  );
}
