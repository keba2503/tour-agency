"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

export default function PerfilPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6 max-w-lg">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <Badge variant="secondary" className="capitalize">
          {user.role}
        </Badge>
      </div>

      <div className="bg-surface-0 rounded-2xl shadow-soft p-6 space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Nombre</label>
          <Input defaultValue={user.name} className="rounded-xl" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Email</label>
          <Input defaultValue={user.email} className="rounded-xl" disabled />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Teléfono</label>
          <Input
            defaultValue={user.phone ?? ""}
            placeholder="+34 600 000 000"
            className="rounded-xl"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Miembro desde</label>
          <Input defaultValue={user.createdAt} className="rounded-xl" disabled />
        </div>

        <Button
          className="rounded-full gradient-primary text-white"
          onClick={() => toast.success("Perfil actualizado")}
        >
          Guardar Cambios
        </Button>
      </div>
    </div>
  );
}
