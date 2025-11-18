"use server";

import { db } from "@/db";
import { images, projects, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { getAuthTokenFromCookie, verifyJwt } from "./login";
import { ClientUploadedFileData } from "uploadthing/types";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type Project = {
  title: string;
  description: string;
  images: ClientUploadedFileData<{ uploadedBy: string }>[];
};

export async function findUserByEmail(email: string): Promise<User | null> {
  const normalizedEmail = email.trim().toLowerCase();
  try {
    const rows = await db
      .select()
      .from(users)
      .where(eq(users.email, normalizedEmail))
      .limit(1);

    return rows[0] ?? null;
  } catch (error) {
    console.log("No user found!");
    return null;
  }
}

export async function createUser(user: Omit<User, "id">): Promise<User | null> {
  const { name, email, password } = user;

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const isExisting = await findUserByEmail(email);

    if (isExisting) {
      console.log("User already exists!");
      return null;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email: normalizedEmail,
      password: hashedPassword,
    };

    const data = await db.insert(users).values(newUser).returning();

    return data[0];
  } catch (error) {
    console.log("An error occured while creating the error", error);
    return null;
  }
}

export async function createProject(
  project: Project
): Promise<{ status: "error" | "success"; message: string }> {
  const token = await getAuthTokenFromCookie();

  if (!token) {
    console.log("No token found");
    return { status: "error", message: "Authentication Error" };
  }

  const user = await verifyJwt(token);

  if (!user) {
    return { status: "error", message: "Authentication Error" };
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
