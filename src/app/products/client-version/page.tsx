"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import type { Product } from "@/types";
import { useEffect, useState } from "react";

export default function ProductsClientVersion() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const productsArr = await res.json();
    setProducts(productsArr);
  }
  return (
    <div className="max-w-7xl mx-auto px-8 pb-16 mt-12">
      <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}
