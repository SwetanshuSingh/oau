import Sidebar from "@/components/cms/sidebar";
import Navbar from "@/components/cms/navbar";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />
      <section className="w-full flex flex-grow">
        <Sidebar />
        {children}
      </section>
    </main>
  );
}
