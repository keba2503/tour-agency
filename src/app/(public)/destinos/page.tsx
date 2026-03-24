import type { Metadata } from "next";
import { Suspense } from "react";
import { Surface } from "@/components/shared/surface";
import { SectionHeading } from "@/components/shared/section-heading";
import { TourFilters } from "@/components/tours/tour-filters";
import { TourGrid } from "@/components/tours/tour-grid";

export const metadata: Metadata = {
  title: "Destinos",
  description: "Explora todos los tours y experiencias disponibles en Alicante",
};

export default function DestinosPage() {
  return (
    <Surface level={1} className="py-16 px-4 min-h-screen">
      <div className="container mx-auto">
        <SectionHeading
          title="Todos los Tours"
          subtitle="Encuentra tu experiencia perfecta en Alicante"
        />
        <Suspense>
          <TourFilters />
          <TourGrid />
        </Suspense>
      </div>
    </Surface>
  );
}
