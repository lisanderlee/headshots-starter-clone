import type { NextApiRequest, NextApiResponse } from 'next'
import { printful } from "@/components/shop/lib/printful-client";
import type {
  SnipcartShippingRate,
  PrintfulShippingItem,
} from "@/types/printful";

type SnipcartRequest = {
  eventName: string;
  content: {
    items: {
      id: string;
      quantity: number;
    }[];
    shippingAddress1?: string;
    shippingAddress2?: string;
    shippingAddressCity?: string;
    shippingAddressCountry?: string;
    shippingAddressProvince?: string;
    shippingAddressPostalCode?: string;
    shippingAddressPhone?: string;
  };
};

type Data = {
  /** An array of shipping rates. */
  rates: SnipcartShippingRate[];
};

type Error = {
  errors: { key: string; message: string }[];
};
  /* @ts-ignore */
export async function POST(  request: Request) {

  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
    "Connection":"keep-alive",
    "Accept-Encoding":"gzip, deflate, br",
    "Accept":"*/*"
  };




  const { eventName, content } = await request.json();

  if (eventName !== 'shippingrates.fetch') {
    return new Response(null, { status: 200 });
  }

  if (content.items.length === 0) {
    return new Response(null, { status: 200 });
  }

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
    (item: any): PrintfulShippingItem => ({
      external_variant_id: item.id,
      quantity: item.quantity,
    })
  );

  try {
    const body = {
      recipient,
      items,
    };
    /* @ts-ignore */
    const {result} = await fetch(
      `https://api.printful.com/shipping/rates`,
      {
        method: "POST",
        headers: headers,
        // body: body
        body: JSON.stringify(body),
      }
    );
  



    return new Response(JSON.stringify({
      rates: result.map((rate: any) => ({
        cost: rate.rate,
        description: rate.name,
        userDefinedId: rate.id,
        guaranteedDaysToDelivery: rate.maxDeliveryDays,
      }))
    }), { status: 200 });
      /* @ts-ignore */
  } catch ({ error }) {
    console.log(error);
    return new Response(JSON.stringify({
      errors: [
        {
          key: error?.reason,
          message: error?.message,
        },
      ],
    }), { status: 200 });
  }
}








