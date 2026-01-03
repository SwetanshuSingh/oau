"use client";

import { Input } from "@/components/ui/input";
import { Check, Edit, Edit2, EditIcon, LucideEdit, Trash2 } from "lucide-react";
import { useState } from "react";
import ImageGallery from "./gallery";
import { projects, images } from "@/db/schema";
import { InferSelectModel, is } from "drizzle-orm";
import { Textarea } from "../ui/textarea";
import DeleteProjectDialog from "./delete-project-dialog";

type Content = {
  content: string;
  isEditing: boolean;
};

type ProjectCardProps = {
  project: InferSelectModel<typeof projects> & {
    images: InferSelectModel<typeof images>[];
  };
};

type ProjectCardFieldProps = {
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
};

function EditButton({
  setIsEditing,
}: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsEditing(true)}
      className="w-fit bg-white/10 p-1.5 rounded-md text-neutral-600 hover:text-amber-600 hover:bg-amber-300/20 cursor-pointer transition-colors duration-150"
    >
      <Edit2 size={16} className="" />
    </button>
  );
}

function SaveButton({
  setIsEditing,
}: {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsEditing(false)}
      className="w-fit bg-white/10 p-1 rounded-md text-neutral-600 hover:text-green-600 hover:bg-green-300/20 cursor-pointer transition-colors duration-150"
    >
      <Check size={20} className="" />
    </button>
  );
}

function ProjectCardField({
  label,
  name,
  value,
  disabled,
}: ProjectCardFieldProps) {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <p className="text-xl text-neutral-300">{label}</p>
      <div className="w-full flex gap-2">
        <Input
          className="bg-white/10 text-neutral-300 border-none outline-none"
          name={name}
          value={value}
          type="text"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="flex flex-col gap-2.5">
      <div className="w-3/6 flex gap-1 justify-end items-center">
        {isEditing ? (
          <SaveButton setIsEditing={setIsEditing} />
        ) : (
          <EditButton setIsEditing={setIsEditing} />
        )}
        <DeleteProjectDialog projectId={project.id} />
      </div>
      <div className="flex flex-col gap-1">
        <section className="w-3/6 p-4 flex flex-col gap-8 rounded-md border border-neutral-800">
          <ProjectCardField
            label="Title"
            name="title"
            value={project.title}
            disabled={!isEditing}
          />

          <div className="flex flex-col gap-2.5">
            <p className="text-xl text-neutral-300">Description</p>
            <Textarea
              className="h-40 bg-white/10 text-neutral-300 outline-none border-none resize-none"
              name="description"
              value={project.description}
              disabled={!isEditing}
            />
          </div>

          <div className="w-full flex items-center gap-2">
            <ProjectCardField
              label="Location"
              name="location"
              value={project.location}
              disabled={!isEditing}
            />
            <ProjectCardField
              label="Type"
              name="type"
              value={project.type}
              disabled={!isEditing}
            />
          </div>

          <div className="w-full flex items-center gap-2">
            <ProjectCardField
              label="Status"
              name="status"
              value={project.status}
              disabled={!isEditing}
            />
            <ProjectCardField
              label="Year"
              name="year"
              value={project.year}
              disabled={!isEditing}
            />
          </div>

          <ProjectCardField
            label="Square Feet"
            name="squareFeet"
            value={project.squareFeet}
            disabled={!isEditing}
          />

          <ImageGallery images={project.images} />
        </section>
      </div>
    </section>
  );
}
