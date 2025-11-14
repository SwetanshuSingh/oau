import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const COOKIE_NAME = "auth_token";
const JWT_SECRET = process.env.JWT_SECRET as string;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  const protectedRoutes = ["/dashboard"];

  const isProtected = protectedRoutes.some((p) => url.pathname.startsWith(p));

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
