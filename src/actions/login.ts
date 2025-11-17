"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { findUserByEmail } from "./user";
import bcrypt from "bcryptjs";

type JwtPayload = {
  sub: string; // user id
  email: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const COOKIE_NAME = "auth_token";

function signJwt(
  payload: JwtPayload,
  options?: { expiresIn?: string | number }
) {
  const expiresIn = options?.expiresIn ?? "7d";
  return jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { expiresIn } as any
  );
}

function setAuthCookie(token: string) {
  const cookieStore = cookies();

  cookieStore.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // use strict for more protection
    path: "/",
    maxAge: 60 * 60 * 60 * 24 * 7, // 7 days in seconds
  });
}

async function verifyPassword(user: User, password: string): Promise<boolean> {
  return await bcrypt.compare(password, user.password);
}

export async function clearAuthCookie() {
  const cookieStore = cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function getAuthTokenFromCookie(): Promise<string | null> {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value ?? null;
  return token;
}

export async function verifyJwt(token: string): Promise<JwtPayload | null> {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    return decoded;
  } catch (error) {
    console.log("An error occured while verifying the token", error);
    return null;
  }
}

export async function login(
  email: string,
  password: string
): Promise<{ status: "success" | "error"; message: string }> {
  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return { status: "error", message: "User does not exists" };
    }

    const validPassword = await verifyPassword(user, password);

    if (!validPassword) {
      return { status: "error", message: "Invalid Credentials" };
    }

    const token = signJwt({ sub: user.name, email: user.email });
    setAuthCookie(token);

    return { status: "success", message: "Login Successfull" };
  } catch (error) {
    console.log("Error while loggin in", error);
    return { status: "error", message: "An error occured while logging in" };
  }
}
