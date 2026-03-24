"use client";

import { useState } from "react";
import { CalendarDays, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PriceTag } from "@/components/shared/price-tag";
import { toast } from "sonner";
import type { Tour } from "@/types";

interface TourBookingSidebarProps {
  tour: Tour;
}

const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00"];

export function TourBookingSidebar({ tour }: TourBookingSidebarProps) {
  const [guests, setGuests] = useState(2);

  const handleBooking = () => {
    toast.success("Reserva simulada con éxito", {
      description: `${tour.title} - ${guests} personas`,
    });
  };

  return (
    <div className="sticky top-24 bg-surface-0 rounded-2xl shadow-glass p-6 space-y-5">
      <PriceTag price={tour.price} size="lg" />

      <div className="space-y-3">
        <div className="space-y-1.5">
          <label className="text-sm font-medium flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-primary" />
            Fecha
          </label>
          <Input type="date" className="rounded-xl" />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Hora</label>
          <Select defaultValue={TIME_SLOTS[1]}>
            <SelectTrigger className="rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TIME_SLOTS.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium flex items-center gap-1.5">
            <Users className="h-4 w-4 text-primary" />
            Personas
          </label>
          <Input
            type="number"
            min={1}
            max={tour.maxGroupSize}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="flex items-center justify-between text-sm py-3 border-t border-surface-2">
        <span className="text-muted-foreground">
          {tour.price}€ x {guests} personas
        </span>
        <span className="font-bold text-lg">{tour.price * guests}€</span>
      </div>

      <Button
        onClick={handleBooking}
        className="w-full rounded-full gradient-primary text-white"
        size="lg"
      >
        Reservar Ahora
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5" />
        Cancelación gratuita hasta 24h antes
      </p>
    </div>
  );
}
