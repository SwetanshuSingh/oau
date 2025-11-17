"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { getAuthTokenFromCookie, verifyJwt } from "./login";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
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

export async function createProject() {
  const token = await getAuthTokenFromCookie();

  if (!token) {
    console.log("No token found");
    return { status: "error", message: "Authentication Error" };
  }

  console.log("Token Found", token);

  const isVerfiedUser = await verifyJwt(token);

  console.log("Verifed User", isVerfiedUser);
}
