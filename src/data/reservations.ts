import type { Reservation } from "@/types";

export const mockReservations: Reservation[] = [
  {
    id: "res-001",
    tourId: "tour-001",
    userId: "user-001",
    date: "2026-04-10",
    time: "10:00",
    guests: 2,
    status: "confirmada",
    totalPrice: 50,
    createdAt: "2026-03-20",
  },
  {
    id: "res-002",
    tourId: "tour-003",
    userId: "user-001",
    date: "2026-04-15",
    time: "12:00",
    guests: 4,
    status: "pendiente",
    totalPrice: 220,
    createdAt: "2026-03-22",
  },
  {
    id: "res-003",
    tourId: "tour-004",
    userId: "user-001",
    date: "2026-03-05",
    time: "21:00",
    guests: 3,
    status: "completada",
    totalPrice: 60,
    createdAt: "2026-02-28",
  },
  {
    id: "res-004",
    tourId: "tour-008",
    userId: "user-001",
    date: "2026-04-20",
    time: "10:00",
    guests: 2,
    status: "confirmada",
    totalPrice: 130,
    createdAt: "2026-03-18",
  },
  {
    id: "res-005",
    tourId: "tour-001",
    userId: "user-001",
    date: "2026-04-25",
    time: "11:00",
    guests: 1,
    status: "cancelada",
    totalPrice: 25,
    createdAt: "2026-03-24",
  },
];

export function getReservationsByUser(userId: string): Reservation[] {
  return mockReservations.filter((r) => r.userId === userId);
}
