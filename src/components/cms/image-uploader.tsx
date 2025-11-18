"use client";

import { Project, UploadedImage } from "@/types";
import { Plus, Trash2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type ImageUploadProps = {
  images: UploadedImage[];
  setProject: React.Dispatch<React.SetStateAction<Project>>;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  maxFiles?: number;
  disabled?: boolean;
  className?: string;
};

type FileWithPreview = {
  file: File;
  previewUrl: string;
  error?: string;
};

export default function ImageUploader({
  accept = "image/*",
  multiple = true,
  maxSizeMB = 10,
  maxFiles = 5,
  disabled = false,
  className,
  images,
  setProject,
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const remainingSlots = useMemo(
    () => Math.max(0, maxFiles - images.length),
    [images.length, maxFiles]
  );

  const validateFile = useCallback(
    (file: File): string | undefined => {
      const maxBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxBytes) {
        return `File too large: ${(file.size / (1024 * 1024)).toFixed(
          2
        )}MB (max ${maxSizeMB}MB)`;
      }
      if (accept && accept !== "*") {
        const accepted = accept.split(",").map((t) => t.trim());
        const wildcardImage = accepted.includes("image/*");
        const exact = accepted.includes(file.type);
        if (!wildcardImage && !exact && !file.type.startsWith("image/")) {
          return `Unsupported type: ${file.type}`;
        }
      }
      return undefined;
    },
    [accept, maxSizeMB]
  );

  const addFiles = useCallback(
    (files: FileList | File[]) => {
      const array = Array.from(files);
      const slice = multiple
        ? array.slice(0, remainingSlots)
        : array.slice(0, 1);
      const next: UploadedImage[] = slice.map((file) => {
        const error = validateFile(file);
        const previewUrl = error ? "" : URL.createObjectURL(file);
        return {
          id: `${file.name}-${file.size}-${file.lastModified}-${
            crypto.randomUUID?.() ?? Math.random()
          }`,
          file,
          previewUrl,
        };
      });
      setProject((prev) => {
        const existingImages = prev.images;
        return { ...prev, images: [...existingImages, ...next] };
      });
    },
    [multiple, remainingSlots, validateFile]
  );

  const removeImage = useCallback((id: string) => {
    setProject((prev) => {
      const target = prev.images.find((image) => image.id === id);

      if (target && target.previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(target.previewUrl);
      }

      const remainingImages = prev.images.filter((image) => image.id !== id);

      return { ...prev, images: remainingImages };
    });
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        addFiles(e.target.files);

        e.target.value = "";
      }
    },
    [addFiles]
  );

  const openFileDialog = useCallback(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);

  return (
    <div className="w-full flex gap-3 flex-wrap justify-start">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleInputChange}
        className="hidden"
      />
      {images.length > 0 &&
        images.map((image) => (
          <div key={image.id} className="relative">
            <div className="absolute inset-0 hover:bg-black/80 hover:text-neutral-300 text-transparent rounded-md flex justify-center items-center cursor-pointer transition-colors duration-150">
              <button onClick={() => removeImage(image.id)} type="button">
                <Trash2 size={24} />
              </button>
            </div>
            <img
              className="w-24 h-24 rounded-md"
              src={image.previewUrl}
              alt="uploaded-img"
            />
          </div>
        ))}
      <button
        type="button"
        onClick={openFileDialog}
        disabled={disabled}
        aria-label="Upload Images"
        className="w-24 h-24 flex justify-center items-center border border-neutral-800 text-neutral-600 hover:bg-white/10 hover:text-neutral-300 rounded-md cursor-pointer transition-colors duration-150"
      >
        <Plus />
      </button>
    </div>
  );
}
