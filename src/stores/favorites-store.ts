"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  tourIds: string[];
  toggle: (tourId: string) => void;
  isFavorite: (tourId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      tourIds: [],

      toggle: (tourId) => {
        const current = get().tourIds;
        const next = current.includes(tourId)
          ? current.filter((id) => id !== tourId)
          : [...current, tourId];
        set({ tourIds: next });
      },

      isFavorite: (tourId) => get().tourIds.includes(tourId),
    }),
    { name: "favorites-storage" }
  )
);
