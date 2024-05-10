import { NextRequest, NextResponse } from "next/server";
import { printful } from "@/components/shop/lib/printful-client";
import type {
  SnipcartShippingRate,
  PrintfulShippingItem,
} from "@/types/printful";

// interface SnipcartRequest extends NextApiRequest {
//   body: {
//     eventName: string;
//     mode: string;
//     createdOn: string;
//     content: { [key: string]: any };
//   };
// }

// type Data = {
//   /** An array of shipping rates. */
//   rates: SnipcartShippingRate[];
// };

// type Error = {
//   errors: { key: string; message: string }[];
// };

export async function POST(request: Request) {
  const result = await request.json();
  const eventName = result.eventName;
  const content = result.content;
  const imageUrl = result.content.items[0].image

  if (eventName !== "shippingrates.fetch")
    return new Response("", {
      status: 200,
    });
  if (content.items.length === 0)
    return new Response("", {
      status: 200,
    });

  const {
    items: cartItems,
    shippingAddress1,
    shippingAddress2,
    shippingAddressCity,
    shippingAddressCountry,
    shippingAddressProvince,
    shippingAddressPostalCode,
    shippingAddressPhone,
    shippingAddress
  } = content;

  const recipient = {
    ...(shippingAddress1 && { address1: shippingAddress1 }),
    ...(shippingAddress2 && { address2: shippingAddress2 }),
    ...(shippingAddress && { address1: shippingAddress?.address1 }),
    ...(shippingAddress && { address2: shippingAddress?.address2 }),
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


  const { result: itemDetails } = await printful.get(`store/variants/@${items[0].external_variant_id}`);

  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
  };

  const res = await fetch(
    `https://api.printful.com/v2/sync-products/${itemDetails.sync_product_id}/sync-variants`,
    {
      headers: headers,
    }
  );

  const productVariants = await res.json();
  const matchingVariant = productVariants.data.find((variant: { id: any; }) => variant.id === itemDetails.id);
  const placements = matchingVariant ? matchingVariant.placements[0] : [];

  const printfulRequestBody2 = {
    recipient: recipient,
    order_items: [
      {
        catalog_variant_id: itemDetails.product.variant_id,
        name: itemDetails.product.name,
        image: itemDetails.product.image,
        source: "catalog",
        quantity: 1,
        placements: [
          {
            placement: matchingVariant.placements[0].placement,
            technique: matchingVariant.placements[0].technique,
            layers: [
              {
                type: "file",
                url: imageUrl
              }
            ]
          }
        ]
      }
    ]
  };


  try {
    const printfulResult = await fetch(`https://api.printful.com/v2/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer sEId4pLrV1w6yGKEPQnoK7QKN3Fd3eBH6FfACKjd`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(printfulRequestBody2),
    });


    const responseBody = JSON.stringify({
      /* @ts-ignore */
      rates: result.map((rate) => ({
        cost: rate.rate,
        description: rate.name,
        userDefinedId: rate.id,
        guaranteedDaysToDelivery: rate.maxDeliveryDays,
      })),
    });
    return new Response(responseBody, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    /* @ts-ignore */
  } catch ({ error }) {
    console.log(error);
    return new Response("", {
      status: 200,
    });
  }
}
