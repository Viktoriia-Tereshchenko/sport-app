import { db } from "@/db/intex";
import { sportsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const SportInsertSchema = z.object({
  title: z
    .string()
    .min(3, "Title should be at least 3 character lang")
    .max(100, "Title should be not longer than 100 character"),
  description: z
    .string()
    .min(3, "Description should be at least 3 character lang")
    .max(250, "Description should be not longer than 100 character"),
  image: z.string().refine(
    (val) => {
      try {
        new URL(val);
        return true;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        return false;
      }
    },
    //Invalid URL of image
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
    return NextResponse.json(sport, { status: 201 });
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
