import type { User } from "@/types";

export const mockUsers: User[] = [
  {
    id: "user-001",
    name: "Juan García",
    email: "juan@email.com",
    role: "cliente",
    phone: "+34 612 345 678",
    createdAt: "2025-06-15",
  },
  {
    id: "user-002",
    name: "Admin Tours",
    email: "admin@email.com",
    role: "admin",
    phone: "+34 600 123 456",
    createdAt: "2025-01-01",
  },
];

export function findUserByEmail(email: string): User | undefined {
  return mockUsers.find((u) => u.email === email);
}
