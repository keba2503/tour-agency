import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
}

export function CtaBanner({ title, subtitle, buttonText, href }: CtaBannerProps) {
  return (
    <section className="gradient-primary rounded-3xl px-8 py-14 md:px-16 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">{subtitle}</p>
      <Link href={href}>
        <Button
          size="lg"
          className="rounded-full bg-white text-primary hover:bg-white/90 gap-2"
        >
          {buttonText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </section>
  );
}
