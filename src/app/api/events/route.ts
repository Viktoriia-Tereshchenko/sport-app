import { db } from "@/db/intex";
import { eventsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const events = await db.select().from(eventsTable);
  return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, description } = body;
  const [event] = await db
    .insert(eventsTable)
    .values({ name, description })
    .returning();

  return NextResponse.json(event);
}
