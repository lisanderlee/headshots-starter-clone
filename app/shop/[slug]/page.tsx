"use client";
import { useState, useEffect } from "react";
import ProductPage from "@/components/shop/product-page";
export const dynamic = "force-dynamic";

/* @ts-ignore */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState();
  const [pictures, setPictures] = useState();

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

  const fetchPictures = async () => {
    /* @ts-ignore */
    const response = await fetch(`/api/getPictures/`);
    const data = await response.json();
    return data;
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

  useEffect(() => {
    const fetchData = async () => {
      /* @ts-ignore */
      const result = await fetchPictures();
      setPictures(result);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {product && <ProductPage product={product} pictures={pictures} />}
    </div>
  );
}
