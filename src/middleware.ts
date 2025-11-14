import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

const COOKIE_NAME = "auth_token";
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  const protectedRoutes = ["/dashboard"];
  const authRoutes = ["/login"];

  const isProtected = protectedRoutes.some((p) => url.pathname.startsWith(p));
  const isAuthRoute = authRoutes.some((p) => url.pathname.startsWith(p));
  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (isAuthRoute && token) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (!isProtected) {
    return NextResponse.next();
  }

  if (!token) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  try {
    jose.jwtVerify(token, JWT_SECRET);

    return NextResponse.next();
  } catch (error) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
