import { printful } from "@/components/shop/lib/printful-client";

export async function GET(request: Request) {
  const {result} = await printful.get("sync/products");

  return new Response(JSON.stringify(result));
}





