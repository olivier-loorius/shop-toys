import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["fr"],
  defaultLocale: "fr",
});

function securityMiddleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  if (request.nextUrl.pathname.startsWith("/api/")) {
    response.headers.set(
      "Access-Control-Allow-Origin",
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    );
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  const ip =
    request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

  if (request.nextUrl.pathname.includes("..") || request.nextUrl.pathname.includes("<script>")) {
    console.warn(`Suspicious request from ${ip}: ${request.nextUrl.pathname}`);
  }
  return response;
}

export default function middleware(request: NextRequest) {
  securityMiddleware(request);
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|favicon.ico).*)", "/api/(.*)"],
};
