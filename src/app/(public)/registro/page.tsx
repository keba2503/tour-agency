import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { Surface } from "@/components/shared/surface";
import { RegisterForm } from "@/components/forms/register-form";

export const metadata: Metadata = { title: "Registro" };

export default function RegisterPage() {
  return (
    <Surface level={1} className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-surface-0 rounded-2xl shadow-glass p-8 space-y-6">
        <div className="text-center space-y-2">
          <Compass className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-2xl font-bold">Crear Cuenta</h1>
          <p className="text-sm text-muted-foreground">
            Regístrate para reservar tus experiencias en Alicante
          </p>
        </div>
        <RegisterForm />
      </div>
    </Surface>
  );
}
