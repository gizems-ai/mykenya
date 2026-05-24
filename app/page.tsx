import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { NairobiFlag } from "@/components/home/NairobiFlag";
import { KenyaForSection } from "@/components/home/KenyaForSection";
import { CityGuides } from "@/components/home/CityGuides";
import { SampleJourneys } from "@/components/home/SampleJourneys";
import { WhatsIncluded } from "@/components/home/WhatsIncluded";
import { WhyTrustUs } from "@/components/home/WhyTrustUs";
import { JournalSection } from "@/components/home/JournalSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <DestinationsSection />
      <NairobiFlag />
      <KenyaForSection />
      <CityGuides />
      <SampleJourneys />
      <WhatsIncluded />
      <WhyTrustUs />
      <JournalSection />
      <FinalCTA />
    </>
  );
}
