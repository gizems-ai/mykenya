"use client";

import Image from "next/image";
import { CuratedBadge } from "../CuratedBadge";

export function HeroSection() {
  return (
    <section className="px-4 md:px-14 pt-8 md:pt-14 pb-0 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 items-stretch">
        {/* Left */}
        <div className="relative pt-6">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-kgreen inline-block" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-kgreen">
              ◇ Curated Kenya · Issue 01
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-[clamp(56px,8vw,110px)] leading-[0.92] font-normal tracking-[-0.035em] mb-8">
            Kenya,
            <br />
            <span className="text-kred">beyond</span> the
            <br />
            <em className="italic text-kgreen">ordinary</em>.
          </h1>

          {/* Mobile hero image — shown only on mobile, sits between headline and subtitle */}
          <div className="relative md:hidden mb-8 overflow-hidden aspect-[3/2]">
            <Image
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80&auto=format&fit=crop"
              alt="Masai Mara at dawn"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-3 left-3 bg-cream/90 font-mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full">
              Masai Mara · Field 023
            </div>
            <div className="absolute top-3 right-3 pointer-events-none">
              <CuratedBadge size={72} rotate={-12} />
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-[18px] leading-[1.55] opacity-80 max-w-[460px] mb-10">
            Local intelligence and AI-assisted logistics — finished in person by founder Selin Tapıcı.
            Every trip starts with a conversation, not a template.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/planner"
              className="bg-ink text-cream font-sans text-sm font-bold tracking-[0.08em] uppercase px-[26px] py-[14px] rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Journey ↗
            </a>
            <a
              href="/experiences"
              className="border border-ink text-ink font-sans text-sm font-bold tracking-[0.08em] uppercase px-[26px] py-[14px] rounded-full hover:bg-ink hover:text-cream transition-colors"
            >
              Explore Kenya
            </a>
          </div>

          {/* Mini facts */}
          <div className="flex gap-8 border-t border-ink/10 pt-6">
            {[
              { num: "6+", label: "Years on the ground" },
              { num: "48", label: "Trusted partners" },
              { num: "1,200+", label: "Travelers helped" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-serif text-[32px] text-kred font-normal">{num}</div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase opacity-60">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo (desktop only) */}
        <div className="relative hidden md:block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80&auto=format&fit=crop"
              alt="Masai Mara at dawn"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-cream/90 font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
              Masai Mara · Field 023
            </div>
          </div>

          <div className="absolute top-4 right-4 pointer-events-none">
            <CuratedBadge size={120} rotate={-14} />
          </div>

          <div className="absolute -bottom-8 -right-4 w-[180px] border-[3px] border-cream">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop"
                alt="Diani beach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
