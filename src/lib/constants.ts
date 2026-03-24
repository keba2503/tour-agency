import type { TourCategory } from "@/types";

export const TOUR_CATEGORIES: Record<TourCategory, string> = {
  cultural: "Cultural",
  gastronomico: "Gastronómico",
  aventura: "Aventura",
  nocturno: "Nocturno",
  familiar: "Familiar",
  naturaleza: "Naturaleza",
};

export const DURATION_OPTIONS = [
  { value: "all", label: "Cualquier duración" },
  { value: "1-2", label: "1-2 horas" },
  { value: "3-4", label: "3-4 horas" },
  { value: "5+", label: "5+ horas" },
];

export const PRICE_OPTIONS = [
  { value: "all", label: "Cualquier precio" },
  { value: "0-25", label: "Hasta 25€" },
  { value: "25-50", label: "25€ - 50€" },
  { value: "50+", label: "Más de 50€" },
];

export const MOCK_CREDENTIALS = {
  client: { email: "juan@email.com", password: "demo1234" },
  admin: { email: "admin@email.com", password: "admin1234" },
};
