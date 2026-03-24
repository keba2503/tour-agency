"use client";

import { Heart } from "lucide-react";
import { TourCard } from "@/components/shared/tour-card";
import { EmptyState } from "@/components/shared/empty-state";
import { tours } from "@/data/tours";
import { useFavoritesStore } from "@/stores/favorites-store";

export default function FavoritosPage() {
  const { tourIds } = useFavoritesStore();
  const favoriteTours = tours.filter((t) => tourIds.includes(t.id));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mis Favoritos</h1>

      {favoriteTours.length === 0 ? (
        <EmptyState
          icon={Heart}
          title="Aún no tienes favoritos"
          description="Explora nuestros tours y guarda los que más te gusten"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}
