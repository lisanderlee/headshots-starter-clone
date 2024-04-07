import { printful } from "@/components/shop/lib/printful-client";

export async function GET(request: Request) {
  const {result} = await printful.get("sync/products");

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}




// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   const headers = {
//     Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
//     "X-PF-Store-Id": "13335936",
//     "Content-Type": "application/json",
//   };

//   const res = await fetch(
//     `https://api.printful.com/v2/catalog-products?category_ids=1?placements=front?selling_region_name=north_america`,
//     {
//       headers: headers,
//     }
//   );

//   const productVariants = await res.json();

//   /* @ts-ignore */
//   return Response.json(productVariants);
// }






