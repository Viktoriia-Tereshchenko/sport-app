"use client";

import { Todo } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserTodos() {
  const { data: session } = useSession();
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);

  async function fetchTodos() {
    const res = await fetch("./api/todos");
    const todosRes = await res.json();
    setTodos(todosRes);
  }

  useEffect(() => {
    console.log(session);
    fetchTodos();
  }, [router, session]);
  if (!session) {
    return <p>You should login first</p>;
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li className="text-black" key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
