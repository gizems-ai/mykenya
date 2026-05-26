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
  return <ExperienceDetailClient slug={params.slug} />;
}
