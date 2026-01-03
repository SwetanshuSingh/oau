"use client";

import { createProject } from "@/actions/user";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Project } from "@/types";
import { useToast } from "@/hooks/use-toast";
import ImageUploader from "./image-uploader";
import { useUploadThing } from "@/lib/uploadthing";

export default function NewProjectDialog() {
  const { toast } = useToast();
  const [project, setProject] = useState<Project>({
    title: "",
    description: "",
    type: "",
    location: "",
    status: "",
    year: "",
    squareFeet: "",
    images: [],
  });

  const { startUpload } = useUploadThing("imageUploader", {
    onUploadError: (err) => {
      toast({
        title: "An Error Occurred!",
        variant: "destructive",
      });
      project.images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
      setProject({
        title: "",
        description: "",
        type: "",
        location: "",
        status: "",
        year: "",
        squareFeet: "",
        images: [],
      });
    },

    onClientUploadComplete: async (uploadedImages) => {
      const projectData = {
        title: project.title,
        description: project.description,
        images: uploadedImages,
        type: project.type,
        location: project.location,
        status: project.status,
        year: project.year,
        squareFeet: project.squareFeet,
      };

      const response = await createProject(projectData);

      if (response.status !== "success") {
        toast({
          title: "An Error Occurred!",
          description: response.message,
          variant: "destructive",
        });
        project.images.forEach((image) =>
          URL.revokeObjectURL(image.previewUrl)
        );
        setProject({
          title: "",
          description: "",
          type: "",
          location: "",
          status: "",
          year: "",
          squareFeet: "",
          images: [],
        });
        return;
      }

      project.images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
      setProject({
        title: "",
        description: "",
        type: "",
        location: "",
        status: "",
        year: "",
        squareFeet: "",
        images: [],
      });
      return;
    },
  });

  const handleInputChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = evt.target.name;

    setProject((prev) => {
      return { ...prev, [fieldName]: evt.target.value };
    });
  };

  const createNewProject = async () => {
    const stringFields = Object.entries(project)
      .filter(([key]) => key !== "images")
      .filter(([, value]) => typeof value === "string" && !value.trim());

    if (stringFields.length > 0) {
      toast({
        title: "An error occurred",
        description: `The following fields cannot be empty: ${stringFields
          .map(([key]) => key)
          .join(", ")}`,
        variant: "destructive",
      });
      return;
    }

    if (project.images.length < 1) {
      toast({
        title: "An error occurred",
        description: "Upload atleast one image to continue",
        variant: "destructive",
      });

      return;
    }

    const files = project.images.map((image) => image.file);
    startUpload(files);
  };

  return (
    <Dialog>
      <DialogTrigger className="w-3/6 border p-2 border-neutral-800 text-neutral-600 hover:bg-white/10 hover:text-neutral-300 transition-colors duration-150 rounded-md">
        <p>New Project</p>
      </DialogTrigger>
      <DialogContent className="h-5/6 font-sans bg-black text-white border-neutral-800 overflow-y-scroll scrollbar-none">
        <DialogHeader>
          <DialogTitle className="text-neutral-300 mb-4 text-2xl">
            Create New Project
          </DialogTitle>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Title</p>
              </span>
              <div className="w-full flex gap-2">
                <Input
                  className="bg-white/10 text-neutral-300 border-none outline-none"
                  name="title"
                  value={project.title}
                  onChange={(evt) => handleInputChange(evt)}
                  type="text"
                  placeholder="Enter project title here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Description</p>
              </span>
              <div className="w-full flex gap-2">
                <Textarea
                  name="description"
                  value={project.description}
                  onChange={(evt) => handleInputChange(evt)}
                  className="h-32 bg-white/10 text-neutral-300 border-none outline-none resize-none"
                  placeholder="Enter project title here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Type</p>
              </span>
              <div className="w-full flex gap-2">
                <Input
                  className="bg-white/10 text-neutral-300 border-none outline-none"
                  name="type"
                  value={project.type}
                  onChange={(evt) => handleInputChange(evt)}
                  type="text"
                  placeholder="Enter project type here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Location</p>
              </span>
              <div className="w-full flex gap-2">
                <Input
                  className="bg-white/10 text-neutral-300 border-none outline-none"
                  name="location"
                  value={project.location}
                  onChange={(evt) => handleInputChange(evt)}
                  type="text"
                  placeholder="Enter project location here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Status</p>
              </span>
              <div className="w-full flex gap-2">
                <Input
                  className="bg-white/10 text-neutral-300 border-none outline-none"
                  name="status"
                  value={project.status}
                  onChange={(evt) => handleInputChange(evt)}
                  type="text"
                  placeholder="Enter project status here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Year</p>
              </span>
              <div className="w-full flex gap-2">
                <Input
                  className="bg-white/10 text-neutral-300 border-none outline-none"
                  name="year"
                  value={project.year}
                  onChange={(evt) => handleInputChange(evt)}
                  type="text"
                  placeholder="Enter project year here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Square Feet</p>
              </span>
              <div className="w-full flex gap-2">
                <Input
                  className="bg-white/10 text-neutral-300 border-none outline-none"
                  name="squareFeet"
                  value={project.squareFeet}
                  onChange={(evt) => handleInputChange(evt)}
                  type="text"
                  placeholder="Enter project square feet here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Images</p>
              </span>
              <ImageUploader images={project.images} setProject={setProject} />
            </div>

            <Button onClick={createNewProject} variant="secondary">
              <p>Create Project</p>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
