"use server";

import { db } from "@/db";
import { images, projects } from "@/db/schema";

import { ClientUploadedFileData } from "uploadthing/types";

type Project = {
  title: string;
  description: string;
  images: ClientUploadedFileData<{ uploadedBy: string }>[];
};

// export async function createProject(
//   project: Project
// ): Promise<{ status: "error" | "success"; message: string }> {
//   const token = await getAuthTokenFromCookie();

//   if (!token) {
//     console.log("No token found");
//     return { status: "error", message: "Authentication Error" };
//   }

//   const user = await verifyJwt(token);

//   if (!user) {
//     return { status: "error", message: "Authentication Error" };
//   }

//   try {
//     await db.transaction(async (tx) => {
//       const newProject = await tx
//         .insert(projects)
//         .values({
//           title: project.title,
//           description: project.description,
//         })
//         .returning();

//       const imagesWithProjectId = project.images.map((item) => {
//         return { ...item, projectId: newProject[0].id };
//       });

//       await tx.insert(images).values(imagesWithProjectId);
//     });

//     return { status: "success", message: "Project Created Successfully!" };
//   } catch (error) {
//     console.log("Error while creating a new project", error);
//     return {
//       status: "error",
//       message: "An error occurred while creating a project",
//     };
//   }
// }
