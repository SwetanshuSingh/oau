"use client";

import { ChevronRight } from "lucide-react";

export default function MasonaryGrid() {
  const images = [
    "https://images.unsplash.com/photo-1761839257144-297ce252742e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1763811939167-19810eaa214a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1764044371318-c7a7d546859c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1764193875729-69b427b1bf76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1763466939843-f73291418e9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1763655057880-48a31bbc1398?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  ];

  return (
    <section className="w-full columns-1 sm:columns-2 lg:columns-3 gap-4">
      {images.map((image) => (
        <div className="relative mb-4 break-inside-avoid cursor-pointer group">
          <div className="absolute flex flex-col-reverse inset-0 bg-gradient-to-b hover:from-black/5 hover:to-black/80 transition-all duration-150 ease-out">
            <div className="w-full flex justify-between items-center text-white p-4">
              <span className="flex flex-col">
                <p className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150">Pavilion Road</p>
                <p className="text-lg text-neutral-200 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  Type: Urban Pavilion
                </p>
              </span>

              <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
            </div>
          </div>
          <img className="w-full object-cover" alt="" src={image} />
        </div>
      ))}
    </section>
  );
}
