import Sidebar from "@/components/cms/sidebar";
import Navbar from "@/components/cms/navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#17191A] text-white/80 font-sans">
      <Navbar />
      <section className="w-full flex flex-grow">
        <Sidebar />
        {children}
      </section>
    </main>
  );
}
