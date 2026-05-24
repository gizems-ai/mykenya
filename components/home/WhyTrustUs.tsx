import Image from "next/image";
import { BeadStrip } from "../BeadStrip";
import { CuratedBadge } from "../CuratedBadge";

export function WhyTrustUs() {
  return (
    <>
      <BeadStrip height={24} />
      <section className="py-[100px] px-14 bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-20 items-center">
          {/* Left — founder portrait */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80&auto=format&fit=crop"
                alt="Selin Tapıcı — Founder"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            {/* Badge */}
            <div className="absolute bottom-4 right-4">
              <CuratedBadge size={120} rotate={8} label="LIVED HERE · NOT JUST VISITED" />
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-kred mb-6">§ Why us</p>
            <h2 className="font-serif text-[clamp(40px,5vw,72px)] leading-[0.96] font-normal tracking-[-0.025em] mb-8">
              Built from <em className="italic">real life</em> in Kenya.
            </h2>
            <p className="font-sans text-[18px] leading-relaxed opacity-75 mb-5 max-w-[560px]">
              Selin Tapıcı has lived in Nairobi for six years. Not traveled — lived. Her partner network is built from friendships, not cold emails. Every camp on the list has been slept in. Every guide has been driven with.
            </p>
            <p className="font-sans text-[16px] leading-relaxed opacity-65 mb-12 max-w-[560px]">
              We added AI to the planning layer to handle logistics faster — not to replace the human judgment that makes a Kenya trip worth taking.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-12">
              {[
                { num: "6", label: "Yrs on the ground" },
                { num: "48", label: "Trusted partners" },
                { num: "1.2k+", label: "Travelers helped" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-serif text-[48px] text-kred font-normal leading-none">{num}</div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-60 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BeadStrip height={24} />
    </>
  );
}
