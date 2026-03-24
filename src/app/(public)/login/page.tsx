import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { Surface } from "@/components/shared/surface";
import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = { title: "Iniciar Sesión" };

export default function LoginPage() {
  return (
    <Surface level={1} className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-surface-0 rounded-2xl shadow-glass p-8 space-y-6">
        <div className="text-center space-y-2">
          <Compass className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-2xl font-bold">Bienvenido de vuelta</h1>
          <p className="text-sm text-muted-foreground">
            Inicia sesión para gestionar tus reservas
          </p>
        </div>
        <LoginForm />
      </div>
    </Surface>
  );
}
