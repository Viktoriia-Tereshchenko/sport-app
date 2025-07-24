import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types";

const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["products"] },
  });

  if (!res.ok) {
    throw new Error("Products failed to fetch");
  }
  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-8 pb-16 mt-12">
      <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
export default ProductsServerVersion;
