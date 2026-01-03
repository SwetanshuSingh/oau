"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { deleteProject } from "@/actions/user";
import { useState } from "react";

type DeleteProjectDialogProps = {
  projectId: string;
};

export default function DeleteProjectDialog({
  projectId,
}: DeleteProjectDialogProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete(projectId: string) {
    setIsLoading(true);
    const response = await deleteProject(projectId);

    if (response.status === "error") {
      // handle error state here
    }

    setOpen(false);
    setIsLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="w-fit bg-white/10 p-1 rounded-md text-neutral-600 hover:text-red-700 hover:bg-rose-900/50 cursor-pointer transition-colors duration-150">
          <Trash2 size={20} className="" />
        </div>
      </DialogTrigger>
      <DialogContent className="font-sans bg-black text-white border-neutral-800">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            project card and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end items-center gap-2">
          <Button
            onClick={() => setOpen(false)}
            variant="default"
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDelete(projectId)}
            variant="destructive"
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <p>Delete</p>}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
