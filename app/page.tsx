import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { NairobiFlag } from "@/components/home/NairobiFlag";
import { KenyaForSection } from "@/components/home/KenyaForSection";
import { CityGuides } from "@/components/home/CityGuides";
import { SampleJourneys } from "@/components/home/SampleJourneys";
import { WhyTrustUs } from "@/components/home/WhyTrustUs";
import { JournalSection } from "@/components/home/JournalSection";
import { WhatsIncluded } from "@/components/home/WhatsIncluded";
import { FinalCTA } from "@/components/home/FinalCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "MyKenya",
  url: "https://mykenya.vercel.app",
  description: "Curated Kenya travel experiences — local intelligence and AI-assisted logistics, finished in person by founder Selin Tapıcı.",
  founder: {
    "@type": "Person",
    name: "Selin Tapıcı",
    jobTitle: "Founder & Kenya Travel Curator",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  sameAs: [
    "https://wa.me/905323343613",
  ],
  knowsAbout: ["Kenya safari", "Masai Mara", "Lamu", "Diani beach", "Kenya travel planning"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <HowItWorks />
      <DestinationsSection />
      <ExperiencesSection />
      <NairobiFlag />
      <KenyaForSection />
      <CityGuides />
      <SampleJourneys />
      <WhyTrustUs />
      <JournalSection />
      <WhatsIncluded />
      <FinalCTA />
    </>
  );
}
