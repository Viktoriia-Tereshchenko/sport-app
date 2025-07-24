"use client";
import { User } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersClientVersion() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users", {
      headers: { "Api-Key": "token111" },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const arr = await res.json();
    console.log(arr);
    setUsers(arr);
  }
  return (
    <div className="max-w-7xl mx-auto px-8 pb-16 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {users.map((user) => (
          <li key={user.id}>
            <Link className="my-2" href={`/users/server-version/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
