import type { SnipcartRequest, SnipcartWebhookEvent } from "@/types/printful";
import createOrder from "@/components/shop/lib/create-order";

export async function POST(req: Request) {

  const allowedEvents: SnipcartWebhookEvent[] = [
    "order.completed",
    "customauth:customer_updated",
  ];

  const result = await req.json();
  console.log("HEADERS", result.headers);
  const eventName = result.eventName;
  const content = result.content;








}


