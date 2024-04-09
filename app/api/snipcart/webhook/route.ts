import { NextRequest, NextResponse } from "next/server";

import type { SnipcartRequest, SnipcartWebhookEvent } from "@/types/printful";

import createOrder from "@/components/shop/lib/create-order";

export async function POST(req: NextRequest) {
  const allowedEvents: SnipcartWebhookEvent[] = [
    "order.completed",
    "customauth:customer_updated",
  ];

  const { headers, body } = req;
  console.log("ENTRA", body)
  /* @ts-ignore */
  if (headers.get("content-type") !== "application/json") {
    return new NextResponse("Content-Type must be application/json", {
      status: 400,
    });
  }
  /* @ts-ignore */
  const token = headers.get("x-snipcart-requesttoken");
  /* @ts-ignore */
  const { eventName, content } = body;

  if (eventName !== "order.completed" && eventName !== "customauth:customer_updated") {
    return new NextResponse("This event is not permitted acaaaaaaaa", { status: 400 });
  }

  if (!token) {
    return new NextResponse("Not Authorized", { status: 401 });
  }

  try {
    const response = await fetch(
      `https://app.snipcart.com/api/requestvalidation/${token}`
    );

    if (!response.ok) {
      return new NextResponse("Not Authorized", { status: 401 });
    }

    switch (eventName) {
      case "order.completed":
        console.log("ORDER COMPLETE", eventName)
        await createOrder(content);
        return new NextResponse("Order created", { status: 200 });
        break;
      case "customauth:customer_updated":
        console.log("CUSTOMER UPDATED", eventName)
        return new NextResponse("Customer updated", { status: 200 });
        break;
      default:
        throw new Error("No such event handler exists");
    }
  } catch (err) {
    console.log(err);

    return new NextResponse("Something went wrong", { status: 500 });
  }
}