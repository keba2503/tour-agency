"use client";

import { useAuthStore } from "@/stores/auth-store";

export function useAuth() {
  const { user, isAuthenticated, login, register, logout } = useAuthStore();
  const isAdmin = user?.role === "admin";

  return { user, isAuthenticated, isAdmin, login, register, logout };
}
