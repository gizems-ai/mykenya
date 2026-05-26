import Link from "next/link";
import { BeadStrip } from "./BeadStrip";

const LINKS: Record<string, { label: string; href: string }[]> = {
  Discover: [
    { label: "Destinations",    href: "/destinations/nairobi" },
    { label: "Stays",           href: "/stays" },
    { label: "Experiences",     href: "/experiences" },
    { label: "City Guides",     href: "/cities/nairobi" },
    { label: "Sample Journeys", href: "/itineraries/seven-days-first-time" },
  ],
  Plan: [
    { label: "AI Planner",    href: "/planner" },
    { label: "Concierge",     href: "/planner" },
    { label: "WhatsApp Selin", href: "https://wa.me/905323343613" },
    { label: "Custom Trip",   href: "/planner" },
    { label: "Journal",       href: "/journal" },
  ],
  Editorial: [
    { label: "Journal",      href: "/journal" },
    { label: "Field Notes",  href: "/journal" },
    { label: "City Files",   href: "/cities/nairobi" },
    { label: "Experiences",  href: "/experiences" },
    { label: "Bucket List",  href: "/experiences/bucket-list" },
  ],
  Studio: [
    { label: "About",         href: "/about" },
    { label: "Founder Story", href: "/about" },
    { label: "Press",         href: "/about" },
    { label: "WhatsApp",      href: "https://wa.me/905323343613" },
    { label: "Contact",       href: "https://wa.me/905323343613" },
  ],
};

const SOCIAL: { label: string; href: string }[] = [
  { label: "Instagram",    href: "https://instagram.com" },
  { label: "WhatsApp",     href: "https://wa.me/905323343613" },
  { label: "Newsletter",   href: "/journal" },
  { label: "Karibu Kenya 🇰🇪", href: "/planner" },
];

export default function Footer() {
  return (
    <>
      <BeadStrip height={20} />
      <footer className="bg-ink text-cream">
        <div className="px-8 md:px-14 pt-16 pb-12">
          {/* Headline */}
          <div className="border-t border-cream/20 pt-12 mb-12">
            <h3 className="font-serif text-[clamp(40px,6vw,88px)] leading-[0.94] tracking-[-0.03em] font-normal">
              Karibu.{" "}
              <em className="italic">Let&apos;s plan your Kenya.</em>
            </h3>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo col */}
            <div className="col-span-2 md:col-span-1 md:col-start-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-[3px]">
                  <div className="w-[12px] h-[32px] bg-cream/20 border border-cream/30" />
                  <div className="w-[12px] h-[32px] bg-kred" />
                  <div className="w-[12px] h-[32px] bg-kgreen" />
                </div>
                <Link href="/" className="font-serif text-[28px] italic font-normal text-cream hover:opacity-80 transition-opacity">
                  MyKenya
                </Link>
              </div>
              <p className="font-sans text-sm text-cream/60 leading-relaxed max-w-[220px]">
                Curated Kenya travel — local intelligence, AI-assisted logistics, finished by humans.
              </p>
            </div>

            {/* Link groups */}
            {Object.entries(LINKS).map(([group, items]) => (
              <div key={group}>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-sand mb-4">{group}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.label}>
                      {item.href.startsWith("http") ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("https://wa.me") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className="font-sans text-sm text-cream/70 hover:text-cream transition-colors">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <BeadStrip height={12} />
          </div>

          {/* Bottom row */}
          <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-cream/40">
              © MyKenya 2026 · Made in Nairobi &amp; Istanbul
            </span>
            <div className="flex flex-wrap gap-6">
              {SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.1em] uppercase text-cream/40 hover:text-cream/70 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
