import type { SnipcartRequest, SnipcartWebhookEvent } from "@/types/printful";
import createOrder from "@/components/shop/lib/create-order";

export async function POST(req: Request) {

  const allowedEvents: SnipcartWebhookEvent[] = [
    "order.completed",
    "customauth:customer_updated",
  ];

  const result = await req.json();
  const eventName = result.eventName;
  const content = result.content;
  /* @ts-ignore */
  const token = req.headers["x-snipcart-requesttoken"];
  console.log("TOKEN",token);






}


