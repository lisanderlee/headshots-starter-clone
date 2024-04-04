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
      data.sync_product &&
      data.sync_variants
    ) {
      const newArray = [
        {
          /* @ts-ignore */
          ...data.sync_product,
          /* @ts-ignore */
          variants: data.sync_variants,
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
      setPictures(result.pictures);
    };
    fetchData();
  }, []);

  return (
    <div className="  py-10 lg:py-16 ">
      {product && <ProductPage product={product} setProduct={setProduct} pictures={pictures} />}
    </div>
  );
}
