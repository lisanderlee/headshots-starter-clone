import { NextRequest, NextResponse } from "next/server";

import type { SnipcartRequest, SnipcartWebhookEvent } from "@/types/printful";

import createOrder from "@/components/shop/lib/create-order";




export async function POST(req: Request) {
  // const allowedEvents: SnipcartWebhookEvent[] = [
  //   "order.completed",
  //   "customauth:customer_updated",
  // ];
  const result = await req.json()

  console.log("TEST SIMPLE", req.headers, req.body, result);
  // const token = req.headers["x-snipcart-requesttoken"];
  // console.log(token);

  // const { eventName, content } = req.body;

  // if (req.method !== "POST")
  //   return res.status(405).json({ message: "Method not allowed" });

  // if (!allowedEvents.includes(eventName))
  //   return res.status(400).json({ message: "This event is not permitted" });

  // if (!token) return res.status(401).json({ message: "Not Authorized" });

  // try {
  //   const verifyToken = await fetch(
  //     `https://app.snipcart.com/api/requestvalidation/${token}`
  //   );

  //   if (!verifyToken.ok)
  //     return res.status(401).json({ message: "Not Authorization" });
  // } catch (err) {
  //   console.log(err);
  //   return res
  //     .status(500)
  //     .json({ message: "Unable to verify Snipcart webhook token" });
  // }

  // try {
  //   switch (eventName) {
  //     case "order.completed":
  //       await createOrder(content);
  //       break;
  //     case "customauth:customer_updated":
  //       return res
  //         .status(200)
  //         .json({ message: "Customer updated - no action taken" });
  //     default:
  //       throw new Error("No such event handler exists");
  //   }

  //   res.status(200).json({ message: "Done" });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({ message: "Something went wrong" });
  // }
}
