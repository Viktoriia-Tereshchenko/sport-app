import { db } from "@/db/intex";
import { sportsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const SportInsertSchema = z.object({
  title: z.string().min(3, "Min length is 3").max(100, "Max length is 100"),
  description: z
    .string()
    .min(3, "Min length is 3")
    .max(250, "Max length is 250"),
  image: z.string().refine(
    (val) => {
      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    },
    { message: "The image URL must be correct" }
  ),
});

export async function GET() {
  const sports = await db.select().from(sportsTable);
  return NextResponse.json(sports);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, image, description } = SportInsertSchema.parse(body);
    const [sport] = await db
      .insert(sportsTable)
      .values({ title, image, description })
      .returning();
    return NextResponse.json(sport);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
