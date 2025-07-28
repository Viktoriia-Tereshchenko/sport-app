import { db } from "@/db/intex";
import { sportsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const sports = await db.select().from(sportsTable);
  return NextResponse.json(sports);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, image, description } = body;
  const [sport] = await db
    .insert(sportsTable)
    .values({ title, image, description })
    .returning();
  return NextResponse.json(sport);
}
