import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Surface } from "@/components/shared/surface";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Tours Alicante",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Phone, label: "Teléfono", value: siteConfig.phone },
  { icon: MapPin, label: "Dirección", value: siteConfig.address },
  { icon: Clock, label: "Horario", value: "Lun - Sáb, 9:00 - 20:00" },
];

export default function ContactPage() {
  return (
    <Surface level={1} className="py-16 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Contacto"
          subtitle="¿Tienes alguna pregunta? Estamos encantados de ayudarte"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface-0 rounded-2xl shadow-soft p-6">
            <ContactForm />
          </div>

          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-surface-0 rounded-2xl shadow-soft p-4 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <info.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{info.label}</span>
                </div>
                <p className="text-sm text-muted-foreground">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Surface>
  );
}
