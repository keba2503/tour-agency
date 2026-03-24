import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTourBySlug } from "@/data/tours";
import { tours } from "@/data/tours";
import type { Reservation, ReservationStatus } from "@/types";

interface ReservationTableProps {
  reservations: Reservation[];
}

const statusStyles: Record<ReservationStatus, string> = {
  confirmada: "bg-emerald-100 text-emerald-700",
  pendiente: "bg-amber-100 text-amber-700",
  cancelada: "bg-red-100 text-red-700",
  completada: "bg-blue-100 text-blue-700",
};

function findTourTitle(tourId: string): string {
  const tour = tours.find((t) => t.id === tourId);
  return tour?.title ?? "Tour desconocido";
}

export function ReservationTable({ reservations }: ReservationTableProps) {
  return (
    <div className="bg-surface-0 rounded-2xl shadow-soft overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tour</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Personas</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Estado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((res) => (
            <TableRow key={res.id}>
              <TableCell className="font-medium max-w-[200px] truncate">
                {findTourTitle(res.tourId)}
              </TableCell>
              <TableCell>
                {res.date} {res.time}
              </TableCell>
              <TableCell>{res.guests}</TableCell>
              <TableCell className="font-medium">{res.totalPrice}€</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={statusStyles[res.status]}
                >
                  {res.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
