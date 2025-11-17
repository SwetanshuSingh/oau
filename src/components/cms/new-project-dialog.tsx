"use client";

import { createProject } from "@/actions/user";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import ImageUploadButton from "./image-upload-button";
import { Project } from "@/types";

export default function NewProjectDialog() {
  const [project, setProject] = useState<Project>({
    title: "",
    description: "",
    images: [],
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

  const createNewProject = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    console.log("Project Data", project);

    // const formData = new FormData(evt.currentTarget);
    // const rawFormData = {
    //   title: formData.get("title"),
    //   description: formData.get("description"),
    // };

    // const { title, description } = rawFormData;

    // if (typeof title !== "string" || typeof description !== "string") {
    //   console.log("Fields can only be text");
    //   return;
    // }

    // if (title.trim() == "" || description.trim() == "") {
    //   console.log("Form Fields cannot be empty");
    // }

    // const response = await createProject();
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

          <form
            onSubmit={(evt) => createNewProject(evt)}
            className="flex flex-col gap-6"
          >
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
              <div className="w-full flex gap-2">
                <ImageUploadButton setProject={setProject} />
                {/* <div className="w-24 h-24 flex justify-center items-center border border-neutral-800 text-neutral-600 hover:bg-white/10 hover:text-neutral-300 rounded-md cursor-pointer transition-colors duration-150">
                  <Plus />
                </div> */}
              </div>
            </div>

            <Button
              disabled={
                project.title == "" ||
                project.description == "" ||
                project.images.length <= 0
              }
              variant="secondary"
            >
              <p>Create Project</p>
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
