"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const createProduct = async (formData: FormData) => {
  const title = formData.get("title");
  const price = formData.get("price");
  const description = formData.get("description");
  const categoryId = formData.get("categoryId");
  const images = [formData.get("image")];

  console.log(formData);
  await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    body: JSON.stringify({ title, price, description, categoryId, images }),
    headers: { "Content-Type": "application/json" },
  });

  revalidateTag("products");
  redirect("/products/server-version");
};

export default createProduct;
