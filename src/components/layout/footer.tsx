import Link from "next/link";
import { Compass, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-surface-3 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">
                Tours <span className="text-primary">Alicante</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Tu guía local en Alicante. Experiencias auténticas y
              personalizadas para descubrir lo mejor de la costa mediterránea.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Explora</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/destinos" className="hover:text-primary transition-colors">
                Destinos
              </Link>
              <Link href="/contacto" className="hover:text-primary transition-colors">
                Contacto
              </Link>
              <Link href="/presupuesto" className="hover:text-primary transition-colors">
                Presupuesto
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contacto</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {siteConfig.email}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                {siteConfig.phone}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {siteConfig.address}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-surface-2 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
