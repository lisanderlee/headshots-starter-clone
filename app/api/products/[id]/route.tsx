import { printful } from "@/components/shop/lib/printful-client";
import { NextResponse } from "next/server";
type Data = {
  id: string;
  price: number;
  url: string;
};
type Error = {
  errors: { key: string; message: string }[];
};
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
   
    const { result } = await printful.get(`store/variants/@${params.id}`);
    result.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    return NextResponse.json({
      id: params.id as string,
      price: result.retail_price,
      url: `/api/products/${params.id}`,
    }, { status: 200 });
  } catch (error) {
    console.log(error);

    return new NextResponse("Error fetching product", { status: 500 });
  }
}