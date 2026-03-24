import { cn } from "@/lib/utils";

interface SurfaceProps {
  level?: 0 | 1 | 2 | 3;
  glass?: boolean;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}

const surfaceLevels = {
  0: "bg-surface-0",
  1: "bg-surface-1",
  2: "bg-surface-2",
  3: "bg-surface-3",
};

export function Surface({
  level = 0,
  glass,
  children,
  className,
  as: Tag = "section",
}: SurfaceProps) {
  return (
    <Tag className={cn(glass ? "glass" : surfaceLevels[level], className)}>
      {children}
    </Tag>
  );
}
