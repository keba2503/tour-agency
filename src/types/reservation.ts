export type ReservationStatus =
  | "confirmada"
  | "pendiente"
  | "cancelada"
  | "completada";

export interface Reservation {
  id: string;
  tourId: string;
  userId: string;
  date: string;
  time: string;
  guests: number;
  status: ReservationStatus;
  totalPrice: number;
  createdAt: string;
}
