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
    images: [],
  });

  const { startUpload } = useUploadThing("imageUploader", {
    onUploadError: (err) => {
      toast({
        title: "An Error Occurred!",
        variant: "destructive",
      });
      project.images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
      setProject({ title: "", description: "", images: [] });
    },

    onClientUploadComplete: async (uploadedImages) => {
      const projectData = {
        title: project.title,
        description: project.description,
        images: uploadedImages,
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
        setProject({ title: "", description: "", images: [] });
        return;
      }

      project.images.forEach((image) => URL.revokeObjectURL(image.previewUrl));
      setProject({ title: "", description: "", images: [] });
      return;
    },
  });

  const handleTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setProject((prev) => {
      return { ...prev, title: evt.target.value };
    });
  };

  const handleDescriptionChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setProject((prev) => {
      return { ...prev, description: evt.target.value };
    });
  };

  const createNewProject = async () => {
    if (project.title.trim() === "" || project.title.trim() === "") {
      toast({
        title: "An error occurred",
        description: "Title and Description cannot be empty",
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
      <DialogContent className="font-sans bg-black text-white border-neutral-800">
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
                  onChange={(evt) => handleTitleChange(evt)}
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
                  onChange={(evt) => handleDescriptionChange(evt)}
                  className="h-32 bg-white/10 text-neutral-300 border-none outline-none resize-none"
                  placeholder="Enter project title here"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="w-full flex items-baseline justify-between">
                <p className="text-xl text-neutral-300">Images</p>
              </span>
              <ImageUploader images={project.images} setProject={setProject} />
            </div>

            <Button
              onClick={createNewProject}
              disabled={
                project.title == "" ||
                project.description == "" ||
                project.images.length <= 0
              }
              variant="secondary"
            >
              <p>Create Project</p>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
