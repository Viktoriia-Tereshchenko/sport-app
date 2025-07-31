import { todos, users } from "@/db/schema";
import { db } from "@/db/intex";
import { authOptions } from "@/lib/auth/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import z from "zod";

const insertTodoSchema = z.object({
  text: z.string().nonempty(),
});

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, session.user.email),
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const userTodos = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, user.id));

  return NextResponse.json(userTodos);
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.email, session.user.email),
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await req.json();
    const { text } = insertTodoSchema.parse(body);
    const [createdTodo] = await db
      .insert(todos)
      .values({ text, userId: user.id })
      .returning();

    return NextResponse.json(createdTodo, { status: 201 });
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
