"use client";

import { Input } from "@/components/ui/input";
import { Check, Edit2, EditIcon, LucideEdit } from "lucide-react";
import { useState } from "react";
import ImageGallery from "./gallery";

type Content = {
  content: string;
  isEditing: boolean;
};

function EditButton({ editContent }: { editContent: () => void }) {
  return (
    <button
      onClick={editContent}
      className="w-fit bg-white/10 p-1.5 rounded-md text-neutral-600 hover:text-amber-600 hover:bg-amber-300/20 cursor-pointer transition-colors duration-150"
    >
      <Edit2 size={16} className="" />
    </button>
  );
}

function SaveButton({ editContent }: { editContent: () => void }) {
  return (
    <button
      onClick={editContent}
      className="w-fit bg-white/10 p-1 rounded-md text-neutral-600 hover:text-green-600 hover:bg-green-300/20 cursor-pointer transition-colors duration-150"
    >
      <Check size={20} className="" />
    </button>
  );
}

export default function ProjectCard() {
  const [title, setTitle] = useState<Content>({
    content: "",
    isEditing: false,
  });
  const [description, setDescription] = useState<Content>({
    content: "",
    isEditing: false,
  });

  const editTitle = () => {
    if (title.isEditing) {
      setTitle((prev) => {
        return { ...prev, isEditing: false };
      });

      return;
    }

    setTitle((prev) => {
      return { ...prev, isEditing: true };
    });
  };

  const editDescription = () => {
    if (description.isEditing) {
      setDescription((prev) => {
        return { ...prev, isEditing: false };
      });

      return;
    }

    setDescription((prev) => {
      return { ...prev, isEditing: true };
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <p className="text-lg tracking-tight text-neutral-300 font-medium">
        Project Name
      </p>
      <section className="w-3/6 p-4 flex flex-col gap-8 rounded-md border border-neutral-800">
        <div className="flex flex-col gap-2.5">
          <span className="w-full flex items-baseline justify-between">
            <p className="text-xl text-neutral-300">Title</p>
            {title.isEditing ? (
              <SaveButton editContent={editTitle} />
            ) : (
              <EditButton editContent={editTitle} />
            )}
          </span>
          <div className="w-full flex gap-2">
            <Input
              className="bg-white/10 text-neutral-300 border-none outline-none "
              type="text"
              placeholder="Enter project title here"
              disabled={!title.isEditing}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="w-full flex justify-between items-baseline">
            <p className="text-xl text-neutral-300">Description</p>
            {description.isEditing ? (
              <SaveButton editContent={editDescription} />
            ) : (
              <EditButton editContent={editDescription} />
            )}
          </span>
          <Input
            className="bg-white/10 text-neutral-300 outline-none border-none"
            type="text"
            placeholder="Enter project description here"
            disabled={!description.isEditing}
          />
        </div>

        <ImageGallery />
      </section>
    </div>
  );
}
