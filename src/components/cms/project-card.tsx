"use client";

import { Input } from "@/components/ui/input";
import { Check, Edit2, Loader2 } from "lucide-react";
import { ChangeEvent, useState } from "react";
import ImageGallery from "./gallery";
import { projects, images } from "@/db/schema";
import { InferSelectModel, is } from "drizzle-orm";
import { Textarea } from "../ui/textarea";
import DeleteProjectDialog from "./delete-project-dialog";
import { updateProject } from "@/actions/user";
import { useToast } from "@/hooks/use-toast";

type ProjectCardProps = {
  project: InferSelectModel<typeof projects> & {
    images: InferSelectModel<typeof images>[];
  };
};

type ProjectChanges = Partial<
  Pick<
    InferSelectModel<typeof projects>,
    | "title"
    | "description"
    | "type"
    | "location"
    | "status"
    | "year"
    | "squareFeet"
  >
>;

type ProjectCardFieldProps = {
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  handleChange: (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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

function SaveButton({ handleSave }: { handleSave: () => void }) {
  return (
    <button
      onClick={handleSave}
      className="w-fit bg-white/10 p-1 rounded-md text-neutral-600 hover:text-green-600 hover:bg-green-300/20 cursor-pointer transition-colors duration-150"
    >
      <Check size={20} className="" />
    </button>
  );
}

function Loader() {
  return (
    <button className="w-fit p-1 rounded-md text-amber-600 bg-amber-300/20 cursor-pointer transition-colors duration-150">
      <Loader2 size={20} className="animate-spin" />
    </button>
  );
}

function ProjectCardField({
  label,
  name,
  value,
  disabled,
  handleChange,
}: ProjectCardFieldProps) {
  return (
    <div className="w-full flex flex-col gap-2.5">
      <p className="text-xl text-neutral-300">{label}</p>
      <div className="w-full flex gap-2">
        <Input
          className="bg-white/10 text-neutral-300 border-none outline-none"
          name={name}
          value={value}
          onChange={handleChange}
          type="text"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [projectData, setProjectData] = useState(project);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const fieldName = evt.target.name;

    setProjectData((prev) => {
      return { ...prev, [fieldName]: evt.target.value };
    });
  }

  async function handleSave() {
    setIsEditing(false);
    setIsLoading(true);

    const fieldsToCompare = [
      "title",
      "description",
      "type",
      "location",
      "status",
      "year",
      "squareFeet",
    ] as const;

    const changedFields = fieldsToCompare.filter(
      (field) => project[field] !== projectData[field]
    );

    if (changedFields.length === 0) {
      // No changes
      setIsLoading(false);
      return;
    }

    // Get only the changed data
    const changes: ProjectChanges = Object.fromEntries(
      changedFields.map((field) => [field, projectData[field]])
    );

    const response = await updateProject(projectData.id, changes);

    if (response.status === "error") {
      console.log("Error", response.message);
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  return (
    <section className="flex flex-col gap-2.5">
      <div className="w-3/6 flex gap-1 justify-end items-center">
        {!isEditing && !isLoading && <EditButton setIsEditing={setIsEditing} />}
        {isEditing && !isLoading && <SaveButton handleSave={handleSave} />}
        {!isEditing && isLoading && <Loader />}

        <DeleteProjectDialog projectId={project.id} />
      </div>
      <div className="flex flex-col gap-1">
        <section className="w-3/6 p-4 flex flex-col gap-8 rounded-md border border-neutral-800">
          <ProjectCardField
            label="Title"
            name="title"
            value={projectData.title}
            handleChange={handleInputChange}
            disabled={!isEditing}
          />

          <div className="flex flex-col gap-2.5">
            <p className="text-xl text-neutral-300">Description</p>
            <Textarea
              className="h-40 bg-white/10 text-neutral-300 outline-none border-none resize-none"
              name="description"
              value={projectData.description}
              onChange={(evt) => handleInputChange(evt)}
              disabled={!isEditing}
            />
          </div>

          <div className="w-full flex items-center gap-2">
            <ProjectCardField
              label="Location"
              name="location"
              value={projectData.location}
              handleChange={handleInputChange}
              disabled={!isEditing}
            />
            <ProjectCardField
              label="Type"
              name="type"
              value={projectData.type}
              handleChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          <div className="w-full flex items-center gap-2">
            <ProjectCardField
              label="Status"
              name="status"
              value={projectData.status}
              handleChange={handleInputChange}
              disabled={!isEditing}
            />
            <ProjectCardField
              label="Year"
              name="year"
              value={projectData.year}
              handleChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>

          <ProjectCardField
            label="Square Feet"
            name="squareFeet"
            value={projectData.squareFeet}
            handleChange={handleInputChange}
            disabled={!isEditing}
          />

          <ImageGallery images={project.images} />
        </section>
      </div>
    </section>
  );
}
