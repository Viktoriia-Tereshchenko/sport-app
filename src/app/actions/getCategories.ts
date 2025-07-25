"use server";

const getCategories = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();
  return categories;
};

export default getCategories;
