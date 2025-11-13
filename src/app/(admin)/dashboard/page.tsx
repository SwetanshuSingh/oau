import Navbar from "@/components/cms/navbar";
import Sidebar from "@/components/cms/sidebar";
import AddIcon from "@/components/icons/add-icon";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <main className="w-full h-screen flex flex-col bg-[#17191A] text-white/80 font-sans">
      <Navbar />
      <section className="w-full flex flex-grow">
        <Sidebar />
        <section className="w-3/6 p-4 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium">Title</p>
            <Input
              className="bg-[#252728] outline-none border border-[#313234]"
              id="email"
              type="text"
              placeholder="m@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium">Description</p>
            <Input
              className="bg-[#252728] outline-none border border-[#313234]"
              id="email"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-medium">Gallery</p>
            <div className="w-full flex justify-start items-center gap-2">
              <img
                className="w-24 h-24 rounded"
                src="https://images.unsplash.com/photo-1762776345918-dbc968a5fcb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3000"
                alt="dummy"
              />
              <div className="w-24 h-24 flex justify-center items-center rounded border border-[#313234] hover:bg-[#252728] transition-colors duration-150 cursor-pointer">
                <AddIcon />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
