import Link from "next/link";
import { ArrowRight, MapPin, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: MapPin, text: "Tours exclusivos en Alicante" },
  { icon: Star, text: "Guías locales expertos" },
  { icon: Shield, text: "Cancelación gratuita" },
];

export function HeroContent() {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <div className="flex flex-wrap justify-center gap-4">
        {highlights.map((item) => (
          <span
            key={item.text}
            className="flex items-center gap-2 glass rounded-full px-4 py-2 text-sm"
          >
            <item.icon className="h-4 w-4 text-primary" />
            {item.text}
          </span>
        ))}
      </div>

      <p className="text-lg text-muted-foreground">
        Descubre los rincones más especiales de Alicante de la mano de guías
        locales. Experiencias auténticas, grupos reducidos y recuerdos
        inolvidables junto al Mediterráneo.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/destinos">
          <Button
            size="lg"
            className="rounded-full gradient-primary text-white gap-2"
          >
            Explorar Tours
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="/contacto">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
          >
            Contactar
          </Button>
        </Link>
      </div>
    </div>
  );
}
