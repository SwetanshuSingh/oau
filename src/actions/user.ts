"use server";

import { db } from "@/db";
import { images, projects } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { ClientUploadedFileData } from "uploadthing/types";

type Project = {
  title: string;
  description: string;
  images: ClientUploadedFileData<{ uploadedBy: string }>[];
};

export async function createProject(
  project: Project
): Promise<{ status: "error" | "success"; message: string }> {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session || !session.user) {
    return { status: "error", message: "Unauthorized Access" };
  }

  try {
    await db.transaction(async (tx) => {
      const newProject = await tx
        .insert(projects)
        .values({
          title: project.title,
          description: project.description,
        })
        .returning();

      const imagesWithProjectId = project.images.map((item) => {
        return { ...item, projectId: newProject[0].id };
      });

      await tx.insert(images).values(imagesWithProjectId);
    });

    return { status: "success", message: "Project Created Successfully!" };
  } catch (error) {
    console.log("Error while creating a new project", error);
    return {
      status: "error",
      message: "An error occurred while creating a project",
    };
  }
}
