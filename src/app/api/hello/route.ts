import { NextResponse } from "next/server";

export async function GET() {
  // NextResponse - вспомагательный класс
  return NextResponse.json({ message: "Hello from backend" });
}
