"use client";

import { CalendarDays, Clock, CheckCircle } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { ReservationTable } from "@/components/dashboard/reservation-table";
import { getReservationsByUser } from "@/data/reservations";
import { useAuth } from "@/hooks/use-auth";

export default function ReservasPage() {
  const { user } = useAuth();
  const reservations = user ? getReservationsByUser(user.id) : [];

  const confirmed = reservations.filter((r) => r.status === "confirmada").length;
  const pending = reservations.filter((r) => r.status === "pendiente").length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Mis Reservas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={CalendarDays} label="Total reservas" value={reservations.length} />
        <StatCard icon={CheckCircle} label="Confirmadas" value={confirmed} />
        <StatCard icon={Clock} label="Pendientes" value={pending} />
      </div>

      <ReservationTable reservations={reservations} />
    </div>
  );
}
