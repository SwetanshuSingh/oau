"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

type JwtPayload = {
  sub: string; // user id
  email: string;
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

function verifyJwt(token: string): JwtPayload | null {
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

function clearAuthCookie() {
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

function getAuthTokenFromCookie(): string | null {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value ?? null;
  return token;
}
