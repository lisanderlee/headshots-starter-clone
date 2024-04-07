import type { NextApiRequest, NextApiResponse } from "next";
import { printful } from "@/components/shop/lib/printful-client";
import type {
  SnipcartShippingRate,
  PrintfulShippingItem,
} from "@/types/printful";


type SnipcartRequest = {
  body: {
    eventName: string;
    mode: string;
    createdOn: string;
    content: { [key: string]: any };
  };
};

type Data = {
  /** An array of shipping rates. */
  rates: SnipcartShippingRate[];
};

type Error = {
  errors: { key: string; message: string }[];
};

export async function GET(request: Request) {

    /* @ts-ignore */
  const { eventName, content } = request.body as SnipcartRequest["body"];

  if (eventName !== "shippingrates.fetch") return new Response("", { status: 200 });
  if (content.items.length === 0) return new Response("", { status: 200 });

  const {
    items: cartItems,
    shippingAddress1,
    shippingAddress2,
    shippingAddressCity,
    shippingAddressCountry,
    shippingAddressProvince,
    shippingAddressPostalCode,
    shippingAddressPhone,
  } = content;

  const recipient = {
    ...(shippingAddress1 && { address1: shippingAddress1 }),
    ...(shippingAddress2 && { address2: shippingAddress2 }),
    ...(shippingAddressCity && { city: shippingAddressCity }),
    ...(shippingAddressCountry && { country_code: shippingAddressCountry }),
    ...(shippingAddressProvince && { state_code: shippingAddressProvince }),
    ...(shippingAddressPostalCode && { zip: shippingAddressPostalCode }),
    ...(shippingAddressPhone && { phone: shippingAddressPhone }),
  };

  const items: PrintfulShippingItem[] = cartItems.map(
      /* @ts-ignore */
    (item): PrintfulShippingItem => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    })
  );

  try {
    const  result = await printful.post("shipping/rates", {
      recipient,
      items,
    });

    return new Response(
      JSON.stringify({
        /* @ts-ignore */
        rates: result.map((rate) => ({
          cost: rate.rate,
          description: rate.name,
          userDefinedId: rate.id,
          guaranteedDaysToDelivery: rate.maxDeliveryDays,
        })),
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
          { /* @ts-ignore */
            key: error?.reason,
             /* @ts-ignore */
            message: error?.message,
          },
        ],
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}