import type { SnipcartRequest, SnipcartWebhookEvent } from "@/types/printful";
import type { NextRequest, NextResponse } from "next/server";
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
  const method = req.method;

  if (method !== "POST")
    return new Response("Method not allowed", {
      status: 405,
    });

  if (!allowedEvents.includes(eventName))
    return new Response("This event is not permitted", {
      status: 400,
    });

  if (!token)
    console.log(token);
    return new Response("Not Authorized", {
      status: 401,
    });

  try {
    const verifyToken = await fetch(
      `https://app.snipcart.com/api/requestvalidation/${token}`
    );

    if (!verifyToken.ok)
      return new Response("Not Authorized", {
        status: 401,
      });
  } catch (err) {
    console.log(err);
    return new Response("Unable to verify Snipcart webhook token", {
      status: 500,
    });
  }

  try {
    switch (eventName) {
      case "order.completed":
        await createOrder(content);
        break;
      case "customauth:customer_updated":
        return new Response("Customer updated - no action taken", {
          status: 200,
        });
      default:
        throw new Error("No such event handler exists");
    }
    return new Response("Done", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}
