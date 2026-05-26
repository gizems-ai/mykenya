import dynamic from "next/dynamic";
import { PROGRAMS } from "@/lib/itineraries";

const ItineraryDetailClient = dynamic(
  () => import("@/components/itineraries/ItineraryDetailClient"),
  { ssr: false }
);

export function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const program = PROGRAMS.find((p) => p.slug === params.slug) ?? PROGRAMS[0];
  return {
    title: `${program.title} · MyKenya`,
    description: program.intro.slice(0, 155),
  };
}

export default function ItineraryPage({ params }: { params: { slug: string } }) {
  return <ItineraryDetailClient slug={params.slug} />;
}
