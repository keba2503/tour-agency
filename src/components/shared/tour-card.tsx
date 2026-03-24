"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RatingStars } from "./rating-stars";
import { PriceTag } from "./price-tag";
import { TOUR_CATEGORIES } from "@/lib/constants";
import { useFavoritesStore } from "@/stores/favorites-store";
import { cn } from "@/lib/utils";
import type { Tour } from "@/types";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const { toggle, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(tour.id);

  return (
    <Link
      href={`/destinos/${tour.slug}`}
      className="group block rounded-3xl bg-surface-0 shadow-soft overflow-hidden transition-shadow hover:shadow-glass"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.images[0]}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(tour.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full glass transition-transform hover:scale-110"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              favorite ? "fill-primary text-primary" : "text-foreground"
            )}
          />
        </button>

        <Badge className="absolute bottom-3 left-3 bg-white/90 text-foreground backdrop-blur-sm">
          {TOUR_CATEGORIES[tour.category]}
        </Badge>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>

        <RatingStars rating={tour.rating} reviewCount={tour.reviewCount} />

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {tour.duration.label}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            Máx. {tour.maxGroupSize}
          </span>
        </div>

        <PriceTag price={tour.price} />
      </div>
    </Link>
  );
}
