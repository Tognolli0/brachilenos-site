import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/pt-br";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
