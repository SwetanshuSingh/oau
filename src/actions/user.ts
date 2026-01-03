"use server";

import { db } from "@/db";
import { images, projects } from "@/db/schema";
import { auth } from "@/lib/auth";
import { ServerActionResponse } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { ClientUploadedFileData } from "uploadthing/types";

type Project = {
  title: string;
  description: string;
  type: string;
  location: string;
  status: string;
  year: string;
  squareFeet: string;
  images: ClientUploadedFileData<{ uploadedBy: string }>[];
};

export async function createProject(
  project: Project
): Promise<ServerActionResponse> {
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
          type: project.type,
          location: project.location,
          status: project.status,
          year: project.year,
          squareFeet: project.squareFeet,
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

export async function deleteProject(
  projectId: string
): Promise<ServerActionResponse> {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session || !session.user) {
    return { status: "error", message: "Unauthorized Access" };
  }

  try {
    await db.delete(projects).where(eq(projects.id, projectId));
  } catch (error) {
    return { status: "error", message: "An error occurred" };
  }

  revalidatePath("/dashboard/work");
  return { status: "success", message: "Project deleted successfully" };
}
