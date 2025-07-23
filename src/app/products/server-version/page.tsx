import { Product } from "@/types";

const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();

  return (
    // <div>
    //   {products.map((product: Product) => (
    //     <li key={product.id}>{product.title}</li>
    //   ))}
    // </div>

    <div className="max-w-7xl mx-auto px-8 pb-16 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product: Product) => (
          <div key={product.id}>
            <div className="bg-white rounded-xl p-4 shadow-md  border border-gray-100 overflow-hidden relative h-[380px] flex flex-col">
              <div className="relative mb-4 overflow-hidden rounded-lg flex-shrink-0">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold mb-2 text-gray-800 line-clamp-2">
                  {product.title}
                </h3>
                <h2>{product.price + " $"}</h2>
                <div className="text-gray-600 text-sm mb-3 test-justify overflow-y-auto h-20">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductsServerVersion;
