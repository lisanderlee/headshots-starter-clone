import type { NextApiRequest, NextApiResponse } from "next";

import { printful } from "@/components/shop/lib/printful-client";
import type { SnipcartTaxItem, PrintfulShippingItem } from"@/types/printful";


type SnipcartRequest = {
  body: {
    eventName: string;
    mode: string;
    createdOn: string;
    content: { [key: string]: any };
  };
};

type Data = {
  /** An array of tax rates. */
  taxes: SnipcartTaxItem[];
};

type Error = {
  errors: { key: string; message: string }[];
};

export async function GET(request: Request) {
  /* @ts-ignore */
  const { eventName, content } = request.body as SnipcartRequest["body"];

  if (eventName !== "taxes.calculate") return new Response("", { status: 200 });

  if (content.items.length === 0)
    return new Response(
      JSON.stringify({
        errors: [
          {
            key: "no_items",
            message: "No items in cart to calculate taxes.",
          },
        ],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  const {
    items: cartItems,
    shippingAddress,
    shippingRateUserDefinedId,
  } = content;

  if (!shippingAddress)
    return new Response(
      JSON.stringify({
        errors: [
          {
            key: "no_address",
            message: "No address to calculate taxes.",
          },
        ],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  const { address1, address2, city, country, province, postalCode, phone } =
    shippingAddress;

  const recipient = {
    ...(address1 && { address1 }),
    ...(address2 && { address2 }),
    ...(city && { city: city }),
    ...(country && { country_code: country }),
    ...(province && { state_code: province }),
    ...(postalCode && { zip: postalCode }),
    ...(phone && { phone }),
  };

  const items: PrintfulShippingItem[] = cartItems.map(
    /* @ts-ignore */
    (item): PrintfulShippingItem => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    })
  );

  try {
    const { result } = await printful.post("orders/estimate-costs", {
      shipping: shippingRateUserDefinedId,
      recipient,
      items,
    });

    return new Response(
      JSON.stringify({
        taxes: [
          {
            name: "VAT",
            amount: result.costs.vat,
            rate: 0,
          },
        ],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        errors: [
          {/* @ts-ignore */
            key: error?.reason,
            /* @ts-ignore */
            message: error?.message,
          },
        ],
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}