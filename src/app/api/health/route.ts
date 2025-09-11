import { NextResponse } from "next/server";
import { getHealth } from "@/lib/api/health";

export async function GET() {
  const health = getHealth();
  return NextResponse.json(health, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
