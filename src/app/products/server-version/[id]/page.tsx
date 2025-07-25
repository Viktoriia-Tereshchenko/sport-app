import { Product } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  console.log("Id: " + id);
  if (!res.ok) {
    if (res.status === 404 || res.status === 400) {
      notFound();
    }
    throw new Error("Failed to fetch product");
  }
  const product: Product = await res.json();
  return (
    <section className="bg-secondary  py-20 px-14 md:px-32 flex justify-center ">
      <div className="bg-background  w-200 p-8 flex flex-col items-center gap-6 rounded-2xl border-border">
        <h2>{product.title}</h2>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-2xl"
          unoptimized
        />
        <p>{product.price + " $"}</p>
        <p>{product.description}</p>
      </div>
    </section>
  );
}
