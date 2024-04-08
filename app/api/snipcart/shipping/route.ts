// import { NextRequest, NextResponse } from "next/server";
// import { printful } from "@/components/shop/lib/printful-client";
// import type {
//   SnipcartShippingRate,
//   PrintfulShippingItem,
// } from "@/types/printful";


//    /* @ts-ignore */
// interface SnipcartRequest extends NextRequest {
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

// export async function POST(   req: Request, res:Response) {
//     /* @ts-ignore */
//   const { eventName, content } = request.body;
 

//   /* @ts-ignore */
//   if (eventName !== "shippingrates.fetch") return res.status(200).end();
//     /* @ts-ignore */
//   if (content.items.length === 0) return res.status(200).end();

//   const {
//     items: cartItems,
//     shippingAddress1,
//     shippingAddress2,
//     shippingAddressCity,
//     shippingAddressCountry,
//     shippingAddressProvince,
//     shippingAddressPostalCode,
//     shippingAddressPhone,
//   } = content;

//   const recipient = {
//     ...(shippingAddress1 && { address1: shippingAddress1 }),
//     ...(shippingAddress2 && { address2: shippingAddress2 }),
//     ...(shippingAddressCity && { city: shippingAddressCity }),
//     ...(shippingAddressCountry && { country_code: shippingAddressCountry }),
//     ...(shippingAddressProvince && { state_code: shippingAddressProvince }),
//     ...(shippingAddressPostalCode && { zip: shippingAddressPostalCode }),
//     ...(shippingAddressPhone && { phone: shippingAddressPhone }),
//   };

//   const items: PrintfulShippingItem[] = cartItems.map(
//       /* @ts-ignore */
//     (item): PrintfulShippingItem => ({
//       external_variant_id: item.id,
//       quantity: item.quantity,
//     })
//   );

//   try {
//     const { result } = await printful.post("shipping/rates", {
//       recipient,
//       items,
//     });
//   /* @ts-ignore */
//     res.status(200).json({
//         /* @ts-ignore */
//       rates: result.map((rate) => ({
//         cost: rate.rate,
//         description: rate.name,
//         userDefinedId: rate.id,
//         guaranteedDaysToDelivery: rate.maxDeliveryDays,
//       })),
//     });
//       /* @ts-ignore */
//   } catch ({ error }) {
//     console.log(error);
//       /* @ts-ignore */
//     res.status(200).json({
//       errors: [
//         {
//           key: error?.reason,
//           message: error?.message,
//         },
//       ],
//     });
//   }
// }



export async function POST(
  request: Request
) {
  // const body = await request.json();
    /* @ts-ignore */
  console.log(body);

  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
    "Connection":"keep-alive",
    "Accept-Encoding":"gzip, deflate, br",
    "Accept":"*/*"
  };

const body =
  {
    "recipient": {
      "address1": "19749 Dearborn St",
      "city": "Chatsworth",
      "country_code": "US",
      "state_code": "CA",
      "zip": "91311",
      "phone": "string"
    },
    "items": [
      {
        "variant_id": "17260",
        "external_variant_id": "6605ea31897f67",
        "warehouse_product_variant_id": "null",
        "quantity": 1,
        "value": "26.50"
      }
    ],
    "currency": "USD",
    "locale": "en_US"
  }



  const res = await fetch(
    `https://api.printful.com/shipping/rates`,
    {
      method: "POST",
      headers: headers,
      // body: body
      body: JSON.stringify(body),
    }
  );

  const bodyData = await res.json();
  console.log("Response body1:", bodyData);
  return new Response(JSON.stringify(bodyData))
}
