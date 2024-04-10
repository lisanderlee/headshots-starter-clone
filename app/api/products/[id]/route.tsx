import { printful } from "@/components/shop/lib/printful-client";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { result } = await printful.get(`store/variants/@${params.id}`);

    // Assuming result is the response data you want to return
    const responseData = {
      id: params.id as string,
      price: result.retail_price,
      url: `/api/products/${params.id}`,
    };

    const cacheControlHeader = "s-maxage=3600, stale-while-revalidate";

    return NextResponse.json(responseData, {
      status: 200,
      headers: {
        "Cache-Control": cacheControlHeader,
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error fetching product", { status: 500 });
  }
}
