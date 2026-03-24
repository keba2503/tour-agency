"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  Heart,
  UserCircle,
  LayoutDashboard,
  BookOpen,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

const clientItems = [
  { href: "/cuenta/reservas", label: "Mis Reservas", icon: CalendarDays },
  { href: "/cuenta/favoritos", label: "Favoritos", icon: Heart },
  { href: "/cuenta/perfil", label: "Mi Perfil", icon: UserCircle },
];

const adminItems = [
  { href: "/cuenta/admin/tours", label: "Gestión Tours", icon: LayoutDashboard },
  { href: "/cuenta/admin/reservas", label: "Reservas", icon: BookOpen },
  { href: "/cuenta/admin/calendario", label: "Calendario", icon: Calendar },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { isAdmin } = useAuth();
  const items = isAdmin ? adminItems : clientItems;

  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
