import { Plus } from "lucide-react";

export default function ImageGallery() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl text-neutral-300">Gallery</p>
      <div className="w-full flex justify-start items-center gap-2">
        <img
          className="w-24 h-24 rounded"
          src="https://images.unsplash.com/photo-1762776345918-dbc968a5fcb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3000"
          alt="dummy"
        />
        <div className="w-24 h-24 flex justify-center items-center border border-neutral-800 text-neutral-600 hover:bg-white/10 hover:text-neutral-300 rounded cursor-pointer transition-colors duration-150">
          <Plus />
        </div>
      </div>
    </div>
  );
}
