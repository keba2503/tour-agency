"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormData } from "@/lib/validators";
import { toast } from "sonner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = () => {
    toast.success("Mensaje enviado correctamente", {
      description: "Te responderemos lo antes posible.",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Nombre</label>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <label className="text-sm font-medium">Asunto</label>
          <Input
            placeholder="¿En qué podemos ayudarte?"
            className="rounded-xl"
            {...register("subject")}
          />
          {errors.subject && (
            <p className="text-xs text-destructive">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Mensaje</label>
        <Textarea
          placeholder="Cuéntanos los detalles..."
          className="rounded-xl min-h-[120px]"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full gradient-primary text-white"
      >
        Enviar Mensaje
      </Button>
    </form>
  );
}
