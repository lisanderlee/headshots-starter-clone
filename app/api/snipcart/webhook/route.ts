import type { SnipcartRequest, SnipcartWebhookEvent } from "@/types/printful";
import type { NextRequest } from "next/server";
import { headers } from "next/headers";
import createOrder from "@/components/shop/lib/create-order";

export async function POST(req: NextRequest) {
  const allowedEvents: SnipcartWebhookEvent[] = [
    "order.completed",
    "customauth:customer_updated",
  ];
  const headersList = headers();
  const token = headersList.get("x-snipcart-requesttoken");
  const result = await req.json();
  const eventName = result.eventName;
  const content = result.content;
  const method = req.method
  /* @ts-ignore */
  // const token = req.headers["x-snipcart-requesttoken"];

  console.log("HEDER", token)

  // if (req.method !== "POST")
  //   /* @ts-ignore */
  //   return res.status(405).json({ message: "Method not allowed" });

  // if (!allowedEvents.includes(eventName))
  //   /* @ts-ignore */
  //   return res.status(400).json({ message: "This event is not permitted" });

  // try {
  //   switch (eventName) {
  //     case "order.completed":
  //       await createOrder(content);
  //       break;
  //     case "customauth:customer_updated":
  //       /* @ts-ignore */
  //       return res
  //         .status(200)
  //         .json({ message: "Customer updated - no action taken" });
  //     default:
  //       throw new Error("No such event handler exists");
  //   }
  //   /* @ts-ignore */
  //   res.status(200).json({ message: "Done" });
  // } catch (err) {
  //   console.log(err);
  //   /* @ts-ignore */
  //   res.status(500).json({ message: "Something went wrong" });
  // }
}
