"use client";
import ProductGrid from "@/components/shop/product-grid";
import { useState, useEffect } from "react";
export const dynamic = "force-dynamic";
export default  function Shop() {
  const [allProducts, setAllProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/getProducts");
    const data = await response.json();
    console.log(data)
    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductGrid allProducts={allProducts} />;
}
