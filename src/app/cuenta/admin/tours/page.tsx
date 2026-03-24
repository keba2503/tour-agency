"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Trash2, Plus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TOUR_CATEGORIES } from "@/lib/constants";
import { tours as initialTours } from "@/data/tours";
import { toast } from "sonner";
import type { Tour } from "@/types";

export default function AdminToursPage() {
  const [tourList] = useState<Tour[]>(initialTours);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gestión de Tours</h1>
        <Dialog>
          <DialogTrigger className="rounded-full gradient-primary text-white gap-2 inline-flex items-center px-4 py-2 text-sm font-medium">
            <Plus className="h-4 w-4" />
            Nuevo Tour
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Nuevo Tour</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <Input placeholder="Título del tour" className="rounded-xl" />
              <Input placeholder="Subtítulo" className="rounded-xl" />
              <div className="grid grid-cols-2 gap-3">
                <Input type="number" placeholder="Precio (€)" className="rounded-xl" />
                <Input type="number" placeholder="Duración (h)" className="rounded-xl" />
              </div>
              <Textarea placeholder="Descripción..." className="rounded-xl" />
              <Button
                className="w-full rounded-full gradient-primary text-white"
                onClick={() => toast.success("Tour creado (simulado)")}
              >
                Crear Tour
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-surface-0 rounded-2xl shadow-soft overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tour</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tourList.map((tour) => (
              <TableRow key={tour.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-14 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={tour.images[0]}
                        alt={tour.title}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <span className="font-medium text-sm truncate max-w-[200px]">
                      {tour.title}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {TOUR_CATEGORIES[tour.category]}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{tour.price}€</TableCell>
                <TableCell>{tour.rating}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      tour.available
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
                    }
                  >
                    {tour.available ? "Activo" : "Inactivo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => toast.info("Eliminación simulada")}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
