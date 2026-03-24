import Link from "next/link";
import { Compass } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Compass className="h-7 w-7 text-primary transition-transform group-hover:rotate-45" />
      <span className="text-lg font-bold tracking-tight">
        Tours <span className="text-primary">Alicante</span>
      </span>
    </Link>
  );
}
