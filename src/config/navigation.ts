export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Destinos", href: "/destinos" },
  { label: "Contacto", href: "/contacto" },
  { label: "Presupuesto", href: "/presupuesto" },
];

export const clientNav: NavItem[] = [
  { label: "Mis Reservas", href: "/cuenta/reservas" },
  { label: "Favoritos", href: "/cuenta/favoritos" },
  { label: "Mi Perfil", href: "/cuenta/perfil" },
];

export const adminNav: NavItem[] = [
  { label: "Gestión Tours", href: "/cuenta/admin/tours" },
  { label: "Reservas", href: "/cuenta/admin/reservas" },
  { label: "Calendario", href: "/cuenta/admin/calendario" },
];
