import dynamic from "next/dynamic";

const CitiesIndexClient = dynamic(
  () => import("@/components/cities/CitiesIndexClient"),
  { ssr: false }
);

export const metadata = {
  title: "City Guides · MyKenya",
  description: "Eight Kenya city guides — Nairobi, Mombasa, Lamu, Kisumu and more. Written by people who live there.",
};

export default function CitiesPage() {
  return <CitiesIndexClient />;
}
