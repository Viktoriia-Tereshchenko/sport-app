"use client";
import { User } from "@/types";
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
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}
