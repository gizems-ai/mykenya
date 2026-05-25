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
  return {
    title: `${
      params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
    } City Guide · MyKenya`,
  };
}

export default function CityGuidePage({
  params,
}: {
  params: { slug: string };
}) {
  const cityData = NAIROBI; // extend with a map when more cities added
  return <CityGuideClient city={cityData} neighboring={NEIGHBORING_GUIDES} />;
}
