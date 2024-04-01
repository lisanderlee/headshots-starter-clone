"use client";
import { useState, useEffect } from "react";
import VariantPicker from "@/components/shop/variant-picker";
// import PictureModal from "@/components/shop/picture-picker-modal";
import updatePreviewUrls from "./utils/imageSwitcher";
const dynamic = "force-dynamic";

/* @ts-ignore */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductPage({ product, setProduct, pictures }: any) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [setNewMockups, newMockups] = useState();
  const { id, name, variants } = product[0];
  const productId = product[0].variants[0].product.product_id;
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
    <div className="bg-white">
      <div className="pb-16  sm:pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{name}</h1>
                <p className="text-xl font-medium text-gray-900">
                  {formattedPrice}
                </p>
              </div>
            </div>
            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>

              <div className="grid  grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img
                  alt={`${activeVariant.name} ${name}`}
                  title={`${activeVariant.name} ${name}`}
                  src={activeVariantFile.preview_url}
                  className="lg:col-span-2 lg:row-span-2 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 lg:col-span-5">
              <div className="mt-10">
                <VariantPicker
                  value={activeVariantExternalId}
                  /* @ts-ignore */
                  onChange={({ target: { value } }) =>
                    setActiveVariantExternalId(value)
                  }
                  variants={variants}
                  disabled={oneStyle}
                />
              </div>
              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>

                <div
                  className="prose prose-sm mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: activeVariant.product.name,
                  }}
                />
              </div>
              <div className="mt-24">
                {pictures ? (
                  <button
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Add Your Image
                  </button>
                ) : (
                  <div
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    No pictures generated
                  </div>
                )}
              </div>
              <div className="mt-5">
                <button
                  className="snipcart-add-item flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
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
            {/* <PictureModal
        
              setProduct={setProduct}
              product = {product}
              pictures={pictures}
              open={open}
              setOpen={setOpen}
              variantsId={variantsId}
              productId={productId}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
