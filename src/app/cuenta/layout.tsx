"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { useAuth } from "@/hooks/use-auth";

export default function CuentaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/login");
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <>
      <Header />
      <div className="flex-1 flex">
        <aside className="hidden md:block w-64 bg-surface-0 p-6 border-r border-surface-2 shrink-0">
          <SidebarNav />
        </aside>
        <main className="flex-1 bg-surface-1 p-6 md:p-8">{children}</main>
      </div>
    </>
  );
}
