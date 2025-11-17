// filename: ImageUploadButton.tsx
"use client";

import { UploadButton } from "@uploadthing/react";
import type { OAUFileRouter } from "@/app/api/uploadthing/core";
import { Plus } from "lucide-react";
import { Project } from "@/types";

type ImageUploadButtonProps = {
  setProject: React.Dispatch<React.SetStateAction<Project>>;
};

function ImageUploadButton({ setProject }: ImageUploadButtonProps) {
  return (
    <UploadButton<OAUFileRouter, "imageUploader">
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log("Files", res);

        const img = res[0];

        setProject((prev) => {
          const existingImages = prev.images;

          const updatedImages = [...existingImages, img];

          return { ...prev, images: updatedImages };
        });
      }}
      onUploadError={(err) => {
        console.log("An error occurred while uploading image", err);
      }}
      onBeforeUploadBegin={(files) => files}
      onUploadBegin={(name) => {}}
      appearance={{
        container: "inline-block",
        button:
          "w-24 h-24 flex justify-center items-center border border-neutral-800 text-neutral-600 hover:bg-white/10 hover:text-neutral-300 rounded-md cursor-pointer transition-colors duration-150 bg-transparent p-0",
        allowedContent: "hidden",
      }}
      content={{
        button({ isUploading }) {
          return (
            <span className="flex items-center justify-center">
              <Plus className="w-5 h-5 text-neutral-400" aria-hidden="true" />
              <span className="sr-only">
                {isUploading ? "Uploading…" : "Upload image"}
              </span>
            </span>
          );
        },
      }}
    />
  );
}

export default ImageUploadButton;
