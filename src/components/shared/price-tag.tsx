import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  className?: string;
  size?: "sm" | "lg";
}

export function PriceTag({ price, className, size = "sm" }: PriceTagProps) {
  return (
    <div className={cn("flex items-baseline gap-0.5", className)}>
      <span className="text-xs text-muted-foreground">Desde</span>
      <span
        className={cn(
          "font-bold",
          size === "sm" ? "text-lg" : "text-2xl"
        )}
      >
        {price}€
      </span>
      <span className="text-xs text-muted-foreground">/persona</span>
    </div>
  );
}
