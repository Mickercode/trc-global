import { redirect } from "next/navigation";
import { isAuthed } from "@/lib/auth";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { logoutAction } from "../auth-actions";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await isAuthed())) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-ink-50 lg:grid lg:grid-cols-[260px_1fr]">
      <AdminSidebar logoutAction={logoutAction} />
      <div className="min-w-0">
        <main className="p-5 sm:p-8 max-w-6xl">{children}</main>
      </div>
    </div>
  );
}
