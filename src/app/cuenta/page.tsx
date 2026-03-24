"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function CuentaPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.replace(isAdmin ? "/cuenta/admin/tours" : "/cuenta/reservas");
  }, [isAdmin, router]);

  return null;
}
