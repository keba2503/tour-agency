"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";
import { findUserByEmail } from "@/data/users";
import { MOCK_CREDENTIALS } from "@/lib/constants";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (email, password) => {
        const isValidClient =
          email === MOCK_CREDENTIALS.client.email &&
          password === MOCK_CREDENTIALS.client.password;
        const isValidAdmin =
          email === MOCK_CREDENTIALS.admin.email &&
          password === MOCK_CREDENTIALS.admin.password;

        if (!isValidClient && !isValidAdmin) return false;

        const user = findUserByEmail(email);
        if (!user) return false;

        set({ user, isAuthenticated: true });
        return true;
      },

      register: (name, email) => {
        const newUser: User = {
          id: `user-${Date.now()}`,
          name,
          email,
          role: "cliente",
          createdAt: new Date().toISOString().split("T")[0],
        };
        set({ user: newUser, isAuthenticated: true });
        return true;
      },

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: "auth-storage" }
  )
);
