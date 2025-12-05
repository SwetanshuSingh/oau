"use client";

import { images } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import { Plus } from "lucide-react";
import Image from "next/image";

type ImageGalleryProps = {
  images: InferSelectModel<typeof images>[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl text-neutral-300">Gallery</p>
      <div className="w-full flex flex-wrap items-center gap-4">
        {images.length > 0 &&
          images.map((image) => (
            <Image
              width={1000}
              height={1000}
              key={image.id}
              className="w-24 h-24 rounded"
              src={image.ufsUrl}
              alt="dummy"
            />
          ))}
        <div className="w-24 h-24 flex justify-center items-center border border-neutral-800 text-neutral-600 hover:bg-white/10 hover:text-neutral-300 rounded cursor-pointer transition-colors duration-150">
          <Plus />
        </div>
      </div>
    </div>
  );
}
