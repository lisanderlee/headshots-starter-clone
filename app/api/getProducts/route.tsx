import { printful } from "@/components/shop/lib/printful-client";

export async function GET(request: Request) {
  const {result} = await printful.get("store/products");
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}










