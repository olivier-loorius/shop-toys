import { NextResponse } from "next/server";
import { getHealth } from "@/backend/lib/health";

export async function GET() {
  return NextResponse.json(getHealth());
}
