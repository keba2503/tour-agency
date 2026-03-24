"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerSchema, type RegisterFormData } from "@/lib/validators";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

export function RegisterForm() {
  const router = useRouter();
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data: RegisterFormData) => {
    registerUser(data.name, data.email, data.password);
    toast.success("Cuenta creada correctamente");
    router.push("/cuenta");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Nombre completo</label>
        <Input
          placeholder="Tu nombre"
          className="rounded-xl"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="tu@email.com"
          className="rounded-xl"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Teléfono (opcional)</label>
        <Input
          type="tel"
          placeholder="+34 600 000 000"
          className="rounded-xl"
          {...register("phone")}
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Contraseña</label>
        <Input
          type="password"
          placeholder="Mínimo 6 caracteres"
          className="rounded-xl"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Confirmar contraseña</label>
        <Input
          type="password"
          placeholder="Repite la contraseña"
          className="rounded-xl"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full gradient-primary text-white"
      >
        Crear Cuenta
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-primary font-medium hover:underline">
          Inicia Sesión
        </Link>
      </p>
    </form>
  );
}
