"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/config/navigation";

interface NavLinksProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

export function NavLinks({ items, className, onItemClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {items.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-full transition-colors",
              isActive
                ? "text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
