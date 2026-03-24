import { Palmtree, Sun, Utensils, Waves } from "lucide-react";
import { HeroSection } from "@/components/hero/hero-section";
import { Surface } from "@/components/shared/surface";
import { SectionHeading } from "@/components/shared/section-heading";
import { TourCard } from "@/components/shared/tour-card";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { CtaBanner } from "@/components/shared/cta-banner";
import { getFeaturedTours } from "@/data/tours";
import { testimonials } from "@/data/testimonials";

const whyAlicante = [
  {
    icon: Sun,
    title: "300 días de sol",
    text: "Clima mediterráneo perfecto para disfrutar al aire libre durante todo el año.",
  },
  {
    icon: Palmtree,
    title: "Historia milenaria",
    text: "Desde los íberos hasta la actualidad, 3.000 años de historia por descubrir.",
  },
  {
    icon: Utensils,
    title: "Gastronomía única",
    text: "Arroces, tapas, vinos D.O. y turrón: la esencia del Mediterráneo.",
  },
  {
    icon: Waves,
    title: "Costa espectacular",
    text: "Playas, calas secretas y la isla de Tabarca a un paso de la ciudad.",
  },
];

export default function HomePage() {
  const featured = getFeaturedTours();

  return (
    <>
      <HeroSection />

      <Surface level={1} className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Tours Destacados"
            subtitle="Las experiencias más valoradas por nuestros viajeros"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </Surface>

      <Surface level={0} className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="¿Por qué Alicante?"
            subtitle="Una ciudad que lo tiene todo para una escapada perfecta"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyAlicante.map((item) => (
              <div
                key={item.title}
                className="text-center space-y-3 p-6 rounded-2xl bg-surface-1 shadow-soft"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Surface>

      <Surface level={1} className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Lo Que Dicen Nuestros Viajeros"
            subtitle="Experiencias reales de quienes ya han explorado Alicante con nosotros"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </Surface>

      <Surface level={0} className="py-20 px-4">
        <div className="container mx-auto">
          <CtaBanner
            title="¿Listo para tu aventura?"
            subtitle="Reserva tu tour en Alicante y vive una experiencia que recordarás siempre"
            buttonText="Ver Todos los Tours"
            href="/destinos"
          />
        </div>
      </Surface>
    </>
  );
}
