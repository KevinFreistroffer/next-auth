import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/app/auth/stateless-session";
import { cookies } from "next/headers";
import {
  protectedRoutes as _protectedRoutes,
  publicRoutes as _publicRoutes,
} from "./app/(public)/routes";

// 1. Specify protected and public routes
const protectedRoutes: string[] = _protectedRoutes.map(({ route }) => route);
const publicRoutes: string[] = _publicRoutes.map(({ route }) => route);

export default async function middleware(req: NextRequest) {
  console.log("middleware");
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  // 4. Redirect
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // if (
  //   isPublicRoute &&
  //   session?.userId &&
  //   !req.nextUrl.pathname.startsWith("/dashboard")
  // ) {
  //   return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  // }

  return NextResponse.next();
}
