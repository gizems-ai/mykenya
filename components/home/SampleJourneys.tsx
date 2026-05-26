import Image from "next/image";
import Link from "next/link";
import { ITINERARIES } from "@/lib/data";

export function SampleJourneys() {
  return (
    <section className="py-14 md:py-[120px] px-4 md:px-14 bg-cream">
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-kred mb-4">§ Sample journeys</p>
        <h2 className="font-serif text-[clamp(40px,5vw,72px)] leading-[0.96] font-normal tracking-[-0.025em] max-w-[800px]">
          Four routes, each one a starting line —{" "}
          <em className="italic">never a copy-paste.</em>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ITINERARIES.map((trip) => {
          const accent = trip.accent;
          return (
            <div
              key={trip.n}
              className="bg-cream border border-ink/10 p-7"
              style={{ borderTop: `5px solid ${accent}` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="font-serif text-[96px] leading-none font-normal"
                  style={{ color: accent }}
                >
                  {trip.n}
                </span>
                <div className="text-right">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-50">{trip.nights}</p>
                  <p
                    className="font-mono text-[10px] tracking-[0.15em] uppercase mt-1"
                    style={{ color: accent }}
                  >
                    {trip.route}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[5/3] overflow-hidden mb-6">
                <Image
                  src={trip.img}
                  alt={trip.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content */}
              <h3 className="font-serif text-[28px] leading-[1.05] font-normal mb-3">{trip.title}</h3>
              <p className="font-sans text-sm leading-relaxed opacity-70 mb-6">{trip.blurb}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-ink/10">
                <span className="font-mono text-[11px] tracking-[0.1em] uppercase opacity-60">
                  From {trip.from}
                </span>
                <Link
                  href={`/itineraries/${trip.slug}`}
                  className="font-mono text-[11px] tracking-[0.1em] uppercase hover:underline"
                  style={{ color: accent }}
                >
                  See full programme →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
