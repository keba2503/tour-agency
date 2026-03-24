import type { Metadata } from "next";
import {
  FileText,
  CheckCircle2,
  XCircle,
  Search,
  Zap,
  Smartphone,
  Star,
  Link2,
  BarChart3,
  Code,
  Clock,
  Euro,
  Gift,
  Users2,
  Ticket,
  Handshake,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PhaseAccordion } from "@/components/shared/phase-accordion";
import {
  budgetIntro,
  phases,
  seoExplanation,
  timeline,
  includes,
  excludes,
} from "@/data/budget";

export const metadata: Metadata = {
  title: "Presupuesto",
  description: "Presupuesto de desarrollo web de reservas de tours",
};

const seoIcons = [Search, Zap, Smartphone, Star, Link2, BarChart3];

export default function PresupuestoPage() {
  return (
    <div className="min-h-screen">
      <section className="gradient-primary py-20 px-4 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <Badge className="bg-white/20 text-white border-0 mb-4 text-xs">
            Ref: PPTO-2026-001
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Presupuesto</h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-2">
            Desarrollo Web de Reservas de Tours
          </p>
          <p className="text-lg text-white/70">
            Guía Turístico en Alicante
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 -mt-8">
        <section className="bg-surface-0 rounded-2xl shadow-glass p-6 md:p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/5">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Introducción</h2>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">{budgetIntro}</p>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Fases del Proyecto</h2>
            <div className="flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">
                4 jornadas laborales
              </span>
              <span className="text-xs text-muted-foreground">(32h)</span>
            </div>
          </div>

          <PhaseAccordion phases={phases} />
        </section>

        <section className="mb-8">
          <div className="bg-gradient-to-br from-surface-0 to-surface-2 rounded-2xl shadow-glass p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl gradient-primary">
                <Search className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Visibilidad en Google (SEO)
                </h2>
                <p className="text-xs text-muted-foreground">
                  Cómo haremos que te encuentren
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {seoExplanation.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {seoExplanation.points.map((point, i) => {
                const SeoIcon = seoIcons[i] ?? Search;
                return (
                  <div
                    key={point.title}
                    className="bg-surface-0 rounded-xl p-5 shadow-soft space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-primary/5">
                        <SeoIcon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm">{point.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-primary/5 rounded-xl p-4 text-center">
              <p className="text-sm font-medium text-primary">
                {seoExplanation.closing}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-0 rounded-2xl shadow-soft p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Plan de Ejecución</h2>
            <Badge className="gradient-primary text-white border-0">
              4 jornadas = 32 horas
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timeline.map((t) => (
              <div
                key={t.phase}
                className="bg-surface-1 rounded-xl p-5 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{t.phase}</span>
                  <Badge variant="secondary" className="text-xs">
                    {t.duration}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.deliverable}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <section className="bg-surface-0 rounded-2xl shadow-soft p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <h2 className="font-bold">Incluido</h2>
            </div>
            <ul className="space-y-2.5">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-surface-0 rounded-2xl shadow-soft p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-muted-foreground" />
              <h2 className="font-bold">No incluido</h2>
            </div>
            <ul className="space-y-2.5">
              {excludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <XCircle className="h-3.5 w-3.5 text-muted-foreground/50 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="bg-surface-0 rounded-2xl shadow-soft p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/5">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold">Tecnología</h2>
          </div>
          <div className="bg-surface-1 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold">Desarrollo a medida</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next.js / React + API backend. Solución moderna, flexible y
              escalable con el mejor rendimiento posible. Tu web será rápida,
              segura y preparada para crecer contigo.
            </p>
          </div>
        </section>

        <section className="mb-8 overflow-hidden rounded-2xl shadow-glass">
          <div className="gradient-primary p-6 md:p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-white/20">
                <Euro className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Inversión</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 space-y-2">
                <p className="text-white/60 text-sm">Valor del proyecto</p>
                <p className="text-4xl font-bold">1.200€</p>
                <p className="text-sm text-white/70">
                  4 jornadas laborales (32 horas) de diseño, desarrollo,
                  testing y puesta en producción. Precio basado en tarifa
                  profesional de 37,50€/hora.
                </p>
              </div>

              <div className="bg-white/20 rounded-xl p-6 space-y-2 ring-2 ring-white/40">
                <div className="flex items-center gap-2 mb-1">
                  <Gift className="h-4 w-4" />
                  <p className="text-white/80 text-sm font-medium">
                    Tu precio como cliente referido
                  </p>
                </div>
                <p className="text-4xl font-bold">580€</p>
                <p className="text-sm text-white/70">
                  Por entrar en nuestro programa de referidos, accedes a un
                  precio exclusivo con más del 50% de descuento sobre el valor
                  real del proyecto.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-0 p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/5">
                <Users2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Programa de Referidos</h3>
                <p className="text-xs text-muted-foreground">
                  Gana recomendando nuestra consultora
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Como cliente referido, no solo disfrutas de un precio preferente:
              también te conviertes en embajador de nuestra consultora. Esto
              significa que puedes recomendar nuestros servicios a otros negocios
              y beneficiarte directamente de ello.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-1 rounded-xl p-5 space-y-2 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/5">
                  <Ticket className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Cupón del 15%</h4>
                <p className="text-xs text-muted-foreground">
                  Recibirás un cupón de descuento personal del 15% que podrás
                  compartir con cualquier persona o negocio que quiera
                  contratar nuestros servicios.
                </p>
              </div>

              <div className="bg-surface-1 rounded-xl p-5 space-y-2 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/5">
                  <Euro className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Comisión por referido</h4>
                <p className="text-xs text-muted-foreground">
                  Por cada cliente que contrate gracias a tu recomendación,
                  recibirás una comisión económica previamente acordada entre
                  ambas partes.
                </p>
              </div>

              <div className="bg-surface-1 rounded-xl p-5 space-y-2 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/5">
                  <Handshake className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm">Relación a largo plazo</h4>
                <p className="text-xs text-muted-foreground">
                  No hay límite de referidos. Mientras sigas recomendando,
                  seguirás generando ingresos. Una colaboración en la que
                  todos ganan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-8 mb-8">
          <p className="text-xs text-muted-foreground">
            Presupuesto válido durante 30 días naturales desde la fecha de
            emisión.
          </p>
        </section>
      </div>
    </div>
  );
}
