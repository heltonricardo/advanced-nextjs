import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/news/:path*",
};

export default function Middleware(request: NextRequest) {
  // const url = request.nextUrl.clone();
  // url.pathname = "/login";
  // return NextResponse.redirect(url);

  return NextResponse.next();
}
