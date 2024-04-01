"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductGrid() {
  const [allProducts, setAllProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/getProducts");
    const data = await response.json();
    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="bg-white">
      <div className="mx-auto px-4 lg:px-32">
        <h2 className="text-6xl font-bold text-gray-900">Awesome Products</h2>
        <div className="mt-24 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {allProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* @ts-ignore */
function ProductCard({ product }) {
  return (
    <>
      <div key={product.id}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <img
              src={product.thumbnail_url}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {product.variants} Variants
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <p className="relative text-lg font-semibold text-white">
              {product.price}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            key={product.id}
            href={`shop/${product.id}`}
            className="relative  cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Customize It<span className="sr-only"></span>
          </Link>
        </div>
      </div>
    </>
  );
}
