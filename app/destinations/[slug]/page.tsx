import dynamic from "next/dynamic";
import { CITIES_MAP, NEIGHBORS } from "@/lib/cities";

const CityGuideClient = dynamic(
  () => import("@/components/cities/CityGuideClient"),
  { ssr: false }
);

export function generateStaticParams() {
  return Object.keys(CITIES_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const city = CITIES_MAP[params.slug] ?? CITIES_MAP.nairobi;
  return {
    title: `${city.city} City Guide · MyKenya`,
    description: `Curated guide to ${city.city} — neighborhoods, where to eat, where to stay, and 48 hours done properly.`,
  };
}

export default function DestinationCityPage({
  params,
}: {
  params: { slug: string };
}) {
  const cityData = CITIES_MAP[params.slug] ?? CITIES_MAP.nairobi;
  const neighboring = NEIGHBORS[params.slug] ?? NEIGHBORS.nairobi;
  return <CityGuideClient city={cityData} neighboring={neighboring} />;
}
