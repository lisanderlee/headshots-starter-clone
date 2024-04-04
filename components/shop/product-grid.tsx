import Link from "next/link";
const dynamic = "force-dynamic";

export default function ProductGrid({ allProducts }:any) {
  return (
    <div className="">
      <div className="mx-auto py-10">
        <h2 className="text-6xl font-semibold text-terceary">
          Awesome Products
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          
          {/* @ts-ignore */
          allProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: any) {
  return (
    <>
      <div className="">
        <div className=" relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl  xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={product.thumbnail_url}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <h3 className="text-lg font-medium text-terceary line-clamp-1">
            {product.name}
          </h3>
          <p className=" mt-2 text-sm text-terceary">
            {product.variants} Variants
          </p>

          <Link
            key={product.id}
            href={`shop/${product.id}`}
            className="relative mt-6 cursor-pointer flex items-center justify-center rounded-full border border-transparent bg-primary px-8 py-2 text-sm font-medium text-terceary hover:bg-red-500"
          >
            Customize It<span className="sr-only"></span>
          </Link>
        </div>
      </div>
    </>
  );
}
