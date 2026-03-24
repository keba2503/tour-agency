import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-surface-0 rounded-2xl p-6 shadow-soft space-y-4">
      <Quote className="h-6 w-6 text-primary/30" />
      <p className="text-sm leading-relaxed text-muted-foreground">
        {testimonial.text}
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.origin}</p>
        </div>
        <div className="flex">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
