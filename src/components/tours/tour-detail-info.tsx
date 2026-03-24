import { Check, MapPin, Clock, Users, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RatingStars } from "@/components/shared/rating-stars";
import { TOUR_CATEGORIES } from "@/lib/constants";
import type { Tour } from "@/types";

interface TourDetailInfoProps {
  tour: Tour;
}

export function TourDetailInfo({ tour }: TourDetailInfoProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
          {TOUR_CATEGORIES[tour.category]}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold">{tour.title}</h1>
        <p className="text-lg text-muted-foreground">{tour.subtitle}</p>
        <RatingStars rating={tour.rating} reviewCount={tour.reviewCount} size="md" />
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 text-primary" />
          {tour.duration.label}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4 text-primary" />
          Máx. {tour.maxGroupSize} personas
        </span>
        <span className="flex items-center gap-1.5">
          <Globe className="h-4 w-4 text-primary" />
          {tour.languages.join(", ")}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-primary" />
          {tour.meetingPoint}
        </span>
      </div>

      <Separator />

      <div>
        <h2 className="text-xl font-semibold mb-3">Descripción</h2>
        <p className="text-muted-foreground leading-relaxed">{tour.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Puntos Destacados</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tour.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Incluye</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tour.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
