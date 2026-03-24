"use client";

import {
  ClipboardList,
  Palette,
  Code,
  Server,
  Globe,
  Rocket,
  BookOpen,
  ArrowRight,
  ChevronDown,
  FileText,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Phase } from "@/data/budget";

const phaseIcons: Record<string, typeof FileText> = {
  clipboard: ClipboardList,
  palette: Palette,
  code: Code,
  server: Server,
  globe: Globe,
  rocket: Rocket,
  book: BookOpen,
};

interface PhaseAccordionProps {
  phases: Phase[];
}

export function PhaseAccordion({ phases }: PhaseAccordionProps) {
  return (
    <Accordion className="space-y-3">
      {phases.map((phase) => {
        const Icon = phaseIcons[phase.icon] ?? FileText;
        return (
          <AccordionItem
            key={phase.id}
            className="border-0 bg-surface-0 rounded-2xl shadow-soft overflow-hidden"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-surface-1 rounded-2xl transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-muted-foreground font-medium">
                    Fase {phase.number}
                  </span>
                  <h3 className="font-semibold text-sm">{phase.title}</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                {phase.items.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-2 text-sm"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
