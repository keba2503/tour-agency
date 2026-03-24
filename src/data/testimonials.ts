export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  text: string;
  rating: number;
  tourSlug: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    name: "María López",
    origin: "Madrid",
    text: "El tour del Castillo fue increíble. Nuestro guía conocía cada rincón y cada historia. Las vistas desde arriba son de película. Totalmente recomendable.",
    rating: 5,
    tourSlug: "castillo-santa-barbara",
  },
  {
    id: "test-002",
    name: "Thomas Weber",
    origin: "Berlín",
    text: "El tour nocturno nos dejó con la boca abierta. Las leyendas, los callejones a media luz... una experiencia completamente diferente. Imprescindible.",
    rating: 5,
    tourSlug: "alicante-nocturno",
  },
  {
    id: "test-003",
    name: "Elena Ruiz",
    origin: "Barcelona",
    text: "La ruta gastronómica fue una delicia. Probamos cosas que jamás habríamos encontrado solos. La paella final fue la mejor que hemos comido.",
    rating: 5,
    tourSlug: "ruta-gastronomica-mercado-central",
  },
  {
    id: "test-004",
    name: "James Mitchell",
    origin: "Londres",
    text: "La visita a la bodega fue espectacular. El Monastrell es un vino increíble y el maridaje con productos locales fue una experiencia única. Muy recomendable.",
    rating: 5,
    tourSlug: "vinos-bodega-alicante",
  },
];
