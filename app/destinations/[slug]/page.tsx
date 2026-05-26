import { redirect } from "next/navigation";
import { CITIES_MAP } from "@/lib/cities";

export function generateStaticParams() {
  return Object.keys(CITIES_MAP).map((slug) => ({ slug }));
}

export default function DestinationCityPage({ params }: { params: { slug: string } }) {
  redirect(`/cities/${params.slug}`);
}
