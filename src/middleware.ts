import { NextResponse } from "next/server";

export function middleware() {
  // Middleware disabled - allow all access
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
