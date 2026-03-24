"use client";

import { CalendarDays, Users, Euro, TrendingUp } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { ReservationTable } from "@/components/dashboard/reservation-table";
import { mockReservations } from "@/data/reservations";

export default function AdminReservasPage() {
  const totalRevenue = mockReservations
    .filter((r) => r.status !== "cancelada")
    .reduce((sum, r) => sum + r.totalPrice, 0);

  const totalGuests = mockReservations
    .filter((r) => r.status !== "cancelada")
    .reduce((sum, r) => sum + r.guests, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Todas las Reservas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard
          icon={CalendarDays}
          label="Total reservas"
          value={mockReservations.length}
        />
        <StatCard icon={Users} label="Total personas" value={totalGuests} />
        <StatCard icon={Euro} label="Ingresos" value={`${totalRevenue}€`} />
        <StatCard icon={TrendingUp} label="Tasa confirmación" value="60%" />
      </div>

      <ReservationTable reservations={mockReservations} />
    </div>
  );
}
