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
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function NewProjectDialog() {
  const createNewProject = async () => {
    const response = await createProject();
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
                  className="bg-white/10 text-neutral-300 border-none outline-none "
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
                <div className="w-24 h-24 flex justify-center items-center border border-neutral-800 text-neutral-600 hover:bg-white/10 hover:text-neutral-300 rounded-md cursor-pointer transition-colors duration-150">
                  <Plus />
                </div>
              </div>
            </div>

            <Button variant="secondary">
              <p>Create Project</p>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
