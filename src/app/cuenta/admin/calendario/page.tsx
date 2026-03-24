"use client";

import { Badge } from "@/components/ui/badge";
import { tours } from "@/data/tours";
import { mockReservations } from "@/data/reservations";

const DAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export default function AdminCalendarioPage() {
  const year = 2026;
  const month = 3;
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const monthName = new Date(year, month).toLocaleString("es", {
    month: "long",
    year: "numeric",
  });

  const reservationsByDay = mockReservations.reduce(
    (acc, res) => {
      const day = parseInt(res.date.split("-")[2], 10);
      const dateMonth = parseInt(res.date.split("-")[1], 10) - 1;
      if (dateMonth === month) {
        acc[day] = (acc[day] || 0) + 1;
      }
      return acc;
    },
    {} as Record<number, number>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Calendario</h1>

      <div className="bg-surface-0 rounded-2xl shadow-soft p-6">
        <h2 className="text-lg font-semibold capitalize mb-4">{monthName}</h2>

        <div className="grid grid-cols-7 gap-1">
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-muted-foreground py-2"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const count = reservationsByDay[day] ?? 0;
            const isToday = day === 24;

            return (
              <div
                key={day}
                className={`
                  relative p-2 rounded-xl text-center text-sm min-h-[60px]
                  ${isToday ? "ring-2 ring-primary bg-primary/5" : "bg-surface-1"}
                  ${count > 0 ? "cursor-pointer hover:bg-surface-2" : ""}
                `}
              >
                <span className={isToday ? "font-bold text-primary" : ""}>
                  {day}
                </span>
                {count > 0 && (
                  <Badge className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] px-1.5 py-0 bg-primary text-white">
                    {count}
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-surface-0 rounded-2xl shadow-soft p-6">
        <h2 className="text-lg font-semibold mb-4">Tours Activos</h2>
        <div className="space-y-2">
          {tours
            .filter((t) => t.available)
            .map((tour) => (
              <div
                key={tour.id}
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-1 text-sm"
              >
                <span>{tour.title}</span>
                <Badge variant="secondary">{tour.price}€</Badge>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
