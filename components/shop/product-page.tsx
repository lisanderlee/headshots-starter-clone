"use client";
import { useState } from "react";
import VariantPicker from "@/components/shop/variant-picker";
import PictureModal from "@/components/shop/picture-picker-modal";
import Link from "next/link";
const dynamic = "force-dynamic";

/* @ts-ignore */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductPage({ product, setProduct, pictures }: any) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const { id, name, variants } = product[0];
  const productId = product[0].id;
  const [firstVariant] = variants;
  const oneStyle = variants.length === 1;
  const [activeVariantExternalId, setActiveVariantExternalId] = useState(
    firstVariant.external_id
  );

  const activeVariant = variants.find(
    /* @ts-ignore */
    (v) => v.external_id === activeVariantExternalId
  );
  const activeVariantFile = activeVariant.files.find(
    /* @ts-ignore */
    ({ type }) => type === "preview"
  );
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: activeVariant.currency,
  }).format(activeVariant.retail_price);
  /* @ts-ignore */
  const variantsId = variants?.map((obj) => obj.variant_id);

  return (
    <div className=" lg:gap-x-10 flex  flex-col lg:flex-row pb-16">
      <div className="flex  w-full lg:w-2/3">
        <img
          alt={`${activeVariant.name} ${name}`}
          title={`${activeVariant.name} ${name}`}
          src={activeVariantFile.preview_url}
          className="rounded-2xl "
        />
      </div>
      <div className=" mt-10  lg:w-1/3">
        <div className="flex justify-between w-full">
          <h1 className="text-3xl max-w-xs font-medium text-terceary">{name}</h1>
          <p className="text-3xl font-medium text-terceary">{formattedPrice}</p>
        </div>
        <div className="mt-10"></div>
        {/* Product details */}
        <div className="mt-10 mb-10">
          <h2 className="text-xl font-medium text-terceary">Description</h2>

          <div
            className="prose prose-lg mt-4 text-terceary"
            dangerouslySetInnerHTML={{
              __html: activeVariant.product.name,
            }}
          />
        </div>
        <VariantPicker
          value={activeVariantExternalId}
          /* @ts-ignore */
          onChange={({ target: { value } }) =>
            setActiveVariantExternalId(value)
          }
          variants={variants}
          disabled={oneStyle}
        />
        <div className="mt-10 lg:mt-24">
          {pictures ? (
            <button
              className="flex max-w-xs flex-1 items-center justify-center rounded-full border border-transparent bg-secondary px-8 py-3 text-base font-medium text-dark hover:bg-[#66B8EE]  sm:w-full"
              onClick={() => {
                setOpen(true);
              }}
            >
              Add Your Image
            </button>
          ) : (
            <Link href="/overview/models/train">
              <div
                className="flex max-w-xs flex-1 items-center justify-center rounded-full border border-transparent bg-secondary px-8 py-3 text-base font-medium text-dark hover:bg-[#66B8EE]  sm:w-full"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Create Images
              </div>
            </Link>
          )}
        </div>
        <div className="mt-5">
          <button
            className="snipcart-add-item flex max-w-xs flex-1 items-center justify-center rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-terceary hover:bg-red-500 sm:w-full"
            data-item-id={activeVariantExternalId}
            data-item-price={activeVariant.retail_price}
            data-item-url={`/api/products/${activeVariantExternalId}`}
            data-item-description={activeVariant.name}
            data-item-image={activeVariantFile.preview_url}
            data-item-name={name}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {pictures && (
        <PictureModal
          setProduct={setProduct}
          product={product}
          createdImages={pictures}
          open={open}
          setOpen={setOpen}
          variantsId={variantsId}
          productId={productId}
        />
      )}
    </div>
  );
}
