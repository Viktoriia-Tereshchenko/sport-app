import { db } from "@/db/intex";
import { todos, users } from "@/db/schema";
import { authOptions } from "@/lib/auth/authOptions";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";

export default async function ServerComponent() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.email) {
    throw new Error("Unauthorized");
  }

  const user = await db.query.users.findFirst({
    where: eq(users.email, session.user.email),
  });

  if (!user) {
    throw new Error("User not found");
  }

  const userTodos = await db
    .select()
    .from(todos)
    .where(eq(todos.userId, user.id));

  return (
    <div>
      {
        <ul>
          {userTodos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      }
    </div>
  );
}
