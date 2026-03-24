"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { tours } from "@/data/tours";
import type { Tour, TourCategory } from "@/types";

export function useTourFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const category = searchParams.get("categoria") as TourCategory | null;
  const duration = searchParams.get("duracion");
  const price = searchParams.get("precio");
  const search = searchParams.get("q") ?? "";

  const setFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const filtered = useMemo(() => {
    let result: Tour[] = [...tours];

    if (category) {
      result = result.filter((t) => t.category === category);
    }

    if (duration && duration !== "all") {
      const [min, max] = duration.split("-").map(Number);
      result = result.filter((t) =>
        max ? t.duration.hours >= min && t.duration.hours <= max : t.duration.hours >= min
      );
    }

    if (price && price !== "all") {
      const [min, max] = price.split("-").map(Number);
      result = result.filter((t) =>
        max ? t.price >= min && t.price <= max : t.price >= min
      );
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.subtitle.toLowerCase().includes(q)
      );
    }

    return result;
  }, [category, duration, price, search]);

  return { filtered, category, duration, price, search, setFilter };
}
