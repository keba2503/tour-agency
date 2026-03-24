export type TourCategory =
  | "cultural"
  | "gastronomico"
  | "aventura"
  | "nocturno"
  | "familiar"
  | "naturaleza";

export interface TourDuration {
  hours: number;
  label: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: TourCategory;
  price: number;
  currency: "EUR";
  duration: TourDuration;
  rating: number;
  reviewCount: number;
  images: string[];
  highlights: string[];
  includes: string[];
  meetingPoint: string;
  maxGroupSize: number;
  languages: string[];
  featured: boolean;
  available: boolean;
}
