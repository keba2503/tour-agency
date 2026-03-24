"use client";

import { Compass } from "lucide-react";
import { TourCard } from "@/components/shared/tour-card";
import { EmptyState } from "@/components/shared/empty-state";
import { useTourFilters } from "@/hooks/use-tour-filters";

export function TourGrid() {
  const { filtered } = useTourFilters();

  if (filtered.length === 0) {
    return (
      <EmptyState
        icon={Compass}
        title="No hay tours disponibles"
        description="Prueba con otros filtros para encontrar la experiencia perfecta."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
