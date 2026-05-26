import dynamic from "next/dynamic";
import { EXPERIENCE_DETAIL } from "@/lib/experiences";

const ExperienceDetailClient = dynamic(
  () => import("@/components/experiences/ExperienceDetailClient"),
  { ssr: false }
);

export function generateStaticParams() {
  return EXPERIENCE_DETAIL.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const exp = EXPERIENCE_DETAIL.find((e) => e.slug === params.slug) ?? EXPERIENCE_DETAIL[0];
  return {
    title: `${exp.title} · MyKenya`,
    description: exp.blurb,
  };
}

export default function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const exp = EXPERIENCE_DETAIL.find((e) => e.slug === params.slug) ?? EXPERIENCE_DETAIL[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: exp.title,
    description: exp.blurb,
    url: `https://mykenya.vercel.app/experiences/${exp.slug}`,
    touristType: exp.kicker,
    itinerary: {
      "@type": "ItemList",
      itemListElement: exp.highlights.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h,
      })),
    },
    offers: {
      "@type": "Offer",
      price: exp.from.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "MyKenya",
      url: "https://mykenya.vercel.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperienceDetailClient slug={params.slug} />
    </>
  );
}
