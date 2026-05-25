import dynamic from "next/dynamic";
import { NAIROBI, NEIGHBORING_GUIDES } from "@/lib/cities";

const CityGuideClient = dynamic(
  () => import("@/components/cities/CityGuideClient"),
  { ssr: false }
);

export function generateStaticParams() {
  return [{ slug: "nairobi" }];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const name = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `${name} City Guide · MyKenya`,
    description: `Curated guide to ${name} — neighborhoods, where to eat, where to stay, and 48 hours done properly.`,
  };
}

export default function DestinationCityPage({
  params,
}: {
  params: { slug: string };
}) {
  // Extend with a CITIES_MAP lookup when more cities are added
  const cityData = NAIROBI;
  return <CityGuideClient city={cityData} neighboring={NEIGHBORING_GUIDES} />;
}
