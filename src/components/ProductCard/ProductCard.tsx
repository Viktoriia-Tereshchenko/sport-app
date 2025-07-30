"use client";

import { Product } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface ProductCardProps {
  product: Product;
}
// chunk, bundle, code splitting
export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const { data: session } = useSession();
  const [message, setMessage] = useState("");

  function handleDelete(id: number) {
    if (session) {
      setMessage("");
      fetchDelete(id);
    } else {
      setMessage("You must be authorized!");
    }
  }
  async function fetchDelete(id: number) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <li>
      <div className="bg-gray-200 rounded-xl p-4 shadow-md  border border-gray-100 overflow-hidden relative h-[504px] flex flex-col dark:text-background">
        <div className="relative mb-4 overflow-hidden rounded-lg flex-shrink-0">
          <Image
            src={product.images[0]}
            alt={"Product " + product.title}
            width={200}
            height={200}
            unoptimized
          />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
          <h3 className="font-bold mb-2 text-gray-800 line-clamp-2 min-h-12">
            {product.title}
          </h3>
          <h2>{product.price + " $"}</h2>
          <div className="text-gray-600 text-sm mb-3 test-justify overflow-y-auto h-20">
            {product.description}
          </div>
          <button
            type="button"
            className="border rounded cursor-pointer w-[70%] shadow-md"
            onClick={() => {
              handleDelete(product.id);
            }}
          >
            Delete
          </button>

          {message && <p className="text-red-600 text-bold pt-2">{message}</p>}

          <Link
            className="py-2"
            href={`/products/server-version/${product.id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </li>
  );
}
