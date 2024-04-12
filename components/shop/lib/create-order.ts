import { printful } from "./printful-client";

import type {
  SnipcartWebhookContent,
  PrintfulShippingItem,
} from "@/types/printful";
// Aca voy recivir todo lo del custo fiels con todo la info del print
const createOrder = async ({
  invoiceNumber,
  email,
  shippingAddress,
  items,
  shippingRateUserDefinedId,
}: SnipcartWebhookContent) => {
  const recipient = {
    ...(shippingAddress.name && { name: shippingAddress.name }),
    ...(shippingAddress.address1 && { address1: shippingAddress.address1 }),
    ...(shippingAddress.address2 && { address2: shippingAddress.address2 }),
    ...(shippingAddress.city && { city: shippingAddress.city }),
    ...(shippingAddress.country && { country_code: shippingAddress.country }),
    ...(shippingAddress.province && {
      state_code: shippingAddress.province,
    }),
    ...(shippingAddress.postalCode && { zip: shippingAddress.postalCode }),
    ...(shippingAddress.phone && { phone: shippingAddress.phone }),
    email,
  };

  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
    Connection: "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    Accept: "*/*",
  };

  const printfulItems: PrintfulShippingItem[] = items.map(
    /* @ts-ignore */
    (item): PrintfulShippingItem => ({
          /* @ts-ignore */
      external_id: item.id,
      quantity: item.quantity,
      // Aca voy a igualar los objectos de printfiles unicos a ese item.
    })
  );
  const body = {
    external_id: invoiceNumber,
    recipient,
    items: printfulItems,
    shipping: shippingRateUserDefinedId,
  };

  const result  = await fetch("https://api.printful.com/v2/orders", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  console.log(result);
  return result;
};

export default createOrder;
