"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TOUR_CATEGORIES, DURATION_OPTIONS, PRICE_OPTIONS } from "@/lib/constants";
import { useTourFilters } from "@/hooks/use-tour-filters";
import type { TourCategory } from "@/types";

export function TourFilters() {
  const { category, duration, price, search, setFilter } = useTourFilters();

  return (
    <div className="flex flex-col md:flex-row gap-3 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar tours..."
          value={search}
          onChange={(e) => setFilter("q", e.target.value || null)}
          className="pl-9 rounded-xl bg-surface-0"
        />
      </div>

      <Select
        value={category ?? "all"}
        onValueChange={(v) => setFilter("categoria", v)}
      >
        <SelectTrigger className="w-full md:w-44 rounded-xl bg-surface-0">
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          {(Object.entries(TOUR_CATEGORIES) as [TourCategory, string][]).map(
            ([key, label]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            )
          )}
        </SelectContent>
      </Select>

      <Select
        value={duration ?? "all"}
        onValueChange={(v) => setFilter("duracion", v)}
      >
        <SelectTrigger className="w-full md:w-44 rounded-xl bg-surface-0">
          <SelectValue placeholder="Duración" />
        </SelectTrigger>
        <SelectContent>
          {DURATION_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={price ?? "all"}
        onValueChange={(v) => setFilter("precio", v)}
      >
        <SelectTrigger className="w-full md:w-44 rounded-xl bg-surface-0">
          <SelectValue placeholder="Precio" />
        </SelectTrigger>
        <SelectContent>
          {PRICE_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
