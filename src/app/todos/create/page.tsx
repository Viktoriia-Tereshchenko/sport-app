"use client";

import { FormEvent } from "react";

export default function CreateTodo() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch("/api/todos", {
      method: "POST",
      //   @ts-expect-error text
      body: JSON.stringify({ text: event.target.text.value }),
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder="text" />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}
