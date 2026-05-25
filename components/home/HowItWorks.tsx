export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "✺",
      title: "Tell us your style",
      desc: "Dates, vibe, who you're traveling with. A few minutes — that's it.",
    },
    {
      num: "02",
      icon: "◐",
      title: "AI shapes the journey",
      desc: "A curated draft within the hour. Regions, routes, the right kind of stays.",
    },
    {
      num: "03",
      icon: "❋",
      title: "Concierge brings it to life",
      desc: "A human team confirms, books, and stays with you the whole way.",
    },
  ];

  return (
    <section className="mt-[140px] py-[100px] px-14 bg-kgreen text-cream">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-20 items-end">
        {/* Left */}
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color: "#E2D2AE" }}>
            ◇ The process
          </p>
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-[0.96] font-normal tracking-[-0.02em]">
            Three steps,
            <br />
            <em className="italic" style={{ color: "#E2D2AE" }}>nothing more.</em>
          </h2>
        </div>

        {/* Right — cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ num, icon, title, desc }) => (
            <div
              key={num}
              className="bg-cream text-ink p-8 flex flex-col relative"
              style={{ minHeight: 280, borderRadius: 4 }}
            >
              <div className="flex justify-between items-start">
                <span className="font-serif text-[56px] text-kred leading-none font-normal">{num}</span>
                <span className="text-kgreen text-2xl">{icon}</span>
              </div>
              <div className="mt-9">
                <h3 className="font-serif text-2xl mb-3 font-normal leading-[1.15]">{title}</h3>
                <p className="font-sans text-sm leading-relaxed opacity-70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
