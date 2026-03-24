import type { Tour, TourCategory } from "@/types";

export const tours: Tour[] = [
  {
    id: "tour-001",
    slug: "castillo-santa-barbara",
    title: "Castillo de Santa Bárbara y Casco Antiguo",
    subtitle: "Historia y vistas panorámicas de Alicante",
    description:
      "Recorre el imponente Castillo de Santa Bárbara, una fortaleza medieval en lo alto del monte Benacantil con vistas espectaculares al Mediterráneo. Descenderemos por el barrio de Santa Cruz, con sus casas encaladas y calles empedradas llenas de historia. Un paseo imprescindible para conocer el corazón de Alicante.",
    category: "cultural",
    price: 25,
    currency: "EUR",
    duration: { hours: 3, label: "3 horas" },
    rating: 4.9,
    reviewCount: 342,
    images: [
      "https://alicantextra.com/uploads/s1/16/53/53/30/castillo-santa-barbara-noche_19_659x371.jpeg",
      "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=800",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800",
    ],
    highlights: [
      "Vistas panorámicas del Mediterráneo",
      "Recorrido por el Barrio de Santa Cruz",
      "Historia de 9 siglos de la fortaleza",
      "Grupo reducido (máx. 12 personas)",
    ],
    includes: [
      "Guía local experto",
      "Entrada al castillo",
      "Agua embotellada",
      "Seguro de actividad",
    ],
    meetingPoint: "Plaza del Ayuntamiento de Alicante",
    maxGroupSize: 12,
    languages: ["Español", "Inglés"],
    featured: true,
    available: true,
  },
  {
    id: "tour-004",
    slug: "alicante-nocturno",
    title: "Alicante de Noche: Leyendas y Misterios",
    subtitle: "El lado oculto de la ciudad al anochecer",
    description:
      "Descubre el Alicante más misterioso cuando cae la noche. Recorreremos callejones del casco antiguo mientras te narro leyendas, historias de contrabandistas y misterios sin resolver. Una experiencia teatralizada que te mostrará la ciudad desde una perspectiva completamente diferente.",
    category: "nocturno",
    price: 20,
    currency: "EUR",
    duration: { hours: 2, label: "2 horas" },
    rating: 4.7,
    reviewCount: 127,
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800",
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800",
    ],
    highlights: [
      "Recorrido teatralizado",
      "Leyendas y misterios locales",
      "Rincones ocultos del casco antiguo",
      "Copa de vino incluida",
    ],
    includes: [
      "Guía-actor profesional",
      "Copa de vino de bienvenida",
      "Linterna vintage",
      "Seguro de actividad",
    ],
    meetingPoint: "Fuente de la Plaza de los Luceros",
    maxGroupSize: 15,
    languages: ["Español"],
    featured: true,
    available: true,
  },
  {
    id: "tour-003",
    slug: "ruta-gastronomica-mercado-central",
    title: "Ruta Gastronómica por el Mercado Central",
    subtitle: "Sabores auténticos del Mediterráneo",
    description:
      "Sumérgete en los sabores de Alicante con esta ruta por el Mercado Central y sus alrededores. Degustaremos tapas tradicionales, turrones, vinos de la D.O. Alicante y los mejores productos locales. Terminaremos con una paella en un restaurante con encanto del centro.",
    category: "gastronomico",
    price: 55,
    currency: "EUR",
    duration: { hours: 3.5, label: "3.5 horas" },
    rating: 4.9,
    reviewCount: 186,
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    ],
    highlights: [
      "6 degustaciones gastronómicas",
      "Maridaje con vinos D.O. Alicante",
      "Paella tradicional incluida",
      "Visita al Mercado Central modernista",
    ],
    includes: [
      "Guía gastronómico local",
      "Todas las degustaciones",
      "Paella y bebidas",
      "Recetario digital",
    ],
    meetingPoint: "Puerta principal del Mercado Central",
    maxGroupSize: 10,
    languages: ["Español", "Inglés"],
    featured: true,
    available: true,
  },
  {
    id: "tour-008",
    slug: "vinos-bodega-alicante",
    title: "Cata de Vinos y Visita a Bodega",
    subtitle: "Denominación de Origen Alicante",
    description:
      "Visita una bodega de la D.O. Alicante rodeada de viñedos y montañas. Conocerás el proceso de elaboración del vino Monastrell, degustarás 5 vinos maridados con productos locales y pasearás entre viñedos con vistas al Mediterráneo.",
    category: "gastronomico",
    price: 65,
    currency: "EUR",
    duration: { hours: 5, label: "5 horas" },
    rating: 4.9,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800",
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800",
      "https://images.unsplash.com/photo-1560148218-1a83060f7b32?w=800",
    ],
    highlights: [
      "Visita guiada a la bodega",
      "Cata de 5 vinos D.O. Alicante",
      "Maridaje con productos locales",
      "Paseo entre viñedos",
    ],
    includes: [
      "Transporte desde Alicante centro",
      "Visita guiada a bodega",
      "Cata de 5 vinos + maridaje",
      "Seguro de actividad",
    ],
    meetingPoint: "Plaza de los Luceros (parada de bus)",
    maxGroupSize: 8,
    languages: ["Español", "Inglés"],
    featured: true,
    available: true,
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter((t) => t.featured);
}

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((t) => t.category === category);
}

export function getAllSlugs(): string[] {
  return tours.map((t) => t.slug);
}
