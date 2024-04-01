import type { NextApiRequest, NextApiResponse } from "next";

import { printful } from "@/components/shop/lib/printful-client";

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

    result.status(200).json({
      id: params.id as string,
      price: result.retail_price,
      url: `/api/products/${params.id}`,
    });
         /* @ts-ignore */
  } catch ({ error }) {
    console.log(error);

  }
}
