import { Category } from "@/types";
import Image from "next/image";

export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    next: { tags: ["categories"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-8 pb-16 mt-12">
      <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category: Category) => (
          <li key={category.id}>
            <p>{category.name}</p>
            <Image
              src={category.image}
              alt={"img"}
              width={200}
              height={200}
              className="rounded-2xl"
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
