// выполняется на сервере
"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createCategory(formData: FormData) {
  const name = formData.get("name")?.toString();
  const image = formData.get("image")?.toString();
  // валидация
  console.log(name, image);
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    method: "POST",
    body: JSON.stringify({ name, image }),
    headers: {
      "Content-Type": "Application/JSON",
    },
  });
  // сохранение в базу
  revalidateTag("categories");
  redirect("/categories");
}
