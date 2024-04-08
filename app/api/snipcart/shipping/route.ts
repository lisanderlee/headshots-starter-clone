import { NextRequest, NextResponse } from "next/server";
import { printful } from "@/components/shop/lib/printful-client";
import type {
  SnipcartShippingRate,
  PrintfulShippingItem,
} from "@/types/printful";


   /* @ts-ignore */
interface SnipcartRequest extends NextRequest {
  body: {
    eventName: string;
    mode: string;
    createdOn: string;
    content: { [key: string]: any };
  };
}

type Data = {
  /** An array of shipping rates. */
  rates: SnipcartShippingRate[];
};

type Error = {
  errors: { key: string; message: string }[];
};

export async function POST(  req: SnipcartRequest, res:NextResponse) {
    /* @ts-ignore */
  const { eventName, content } = req.body;

  console.log("ENTRAA", eventName, content)

  // if (eventName !== "shippingrates.fetch") return res.status(200).end();
  // if (content.items.length === 0) return res.status(200).end();

  // const {
  //   items: cartItems,
  //   shippingAddress1,
  //   shippingAddress2,
  //   shippingAddressCity,
  //   shippingAddressCountry,
  //   shippingAddressProvince,
  //   shippingAddressPostalCode,
  //   shippingAddressPhone,
  // } = content;

  // const recipient = {
  //   ...(shippingAddress1 && { address1: shippingAddress1 }),
  //   ...(shippingAddress2 && { address2: shippingAddress2 }),
  //   ...(shippingAddressCity && { city: shippingAddressCity }),
  //   ...(shippingAddressCountry && { country_code: shippingAddressCountry }),
  //   ...(shippingAddressProvince && { state_code: shippingAddressProvince }),
  //   ...(shippingAddressPostalCode && { zip: shippingAddressPostalCode }),
  //   ...(shippingAddressPhone && { phone: shippingAddressPhone }),
  // };

  // const items: PrintfulShippingItem[] = cartItems.map(
  //   (item): PrintfulShippingItem => ({
  //     external_variant_id: item.id,
  //     quantity: item.quantity,
  //   })
  // );

  // try {
  //   const { result } = await printful.post("shipping/rates", {
  //     recipient,
  //     items,
  //   });

  //   res.status(200).json({
  //     rates: result.map((rate) => ({
  //       cost: rate.rate,
  //       description: rate.name,
  //       userDefinedId: rate.id,
  //       guaranteedDaysToDelivery: rate.maxDeliveryDays,
  //     })),
  //   });
  // } catch ({ error }) {
  //   console.log(error);
  //   res.status(200).json({
  //     errors: [
  //       {
  //         key: error?.reason,
  //         message: error?.message,
  //       },
  //     ],
  //   });
  // }
}
