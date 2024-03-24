"use client";
import { useState, useEffect } from "react";



import ProductPage from "@/components/shop/product-page";
import PictureModal from "@/components/shop/picture-modal";
export const dynamic = "force-dynamic";

/* @ts-ignore */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState();


  /* @ts-ignore */
  const fetchProducts = async ({ productId }) => {
    /* @ts-ignore */
    const response = await fetch(`/api/getProductById/${params.slug}`);
    const data = await response.json();
    if (
      data.productDetails.result.sync_product &&
      data.productDetails.result.sync_variants
    ) {
      const newArray = [
        {
          /* @ts-ignore */
          ...data.productDetails.result.sync_product,
          /* @ts-ignore */
          variants: data.productDetails.result.sync_variants,
        },
      ];
      return newArray;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      /* @ts-ignore */
      const result = await fetchProducts(params.slug);
      /* @ts-ignore */
      setProduct(result);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {product &&  <ProductPage product={product} />}
    </div>
  );
}