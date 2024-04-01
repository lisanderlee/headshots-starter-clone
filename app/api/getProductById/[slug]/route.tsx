import { printful } from "@/components/shop/lib/printful-client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const {result} = await printful.get(`store/products/${params.slug}`);
  console.log(result)
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}
