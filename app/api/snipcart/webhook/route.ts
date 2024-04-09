import type { SnipcartRequest, SnipcartWebhookEvent } from "@/types/printful";
import createOrder from "@/components/shop/lib/create-order";

const allowedEvents: SnipcartWebhookEvent[] = [
  "order.completed",
  "customauth:customer_updated",
];

export default  function POST(req: Request, res: Response) {
  /* @ts-ignore */
  const { eventName, content } =  parseBody(req);

  if (!allowedEvents.includes(eventName)) {
      /* @ts-ignore */
    res.status(400).json({ message: "This event is not permitted" });
    return;
  }
  /* @ts-ignore */
  const token = req.headers["x-snipcart-requesttoken"];
    /* @ts-ignore */
  const verifyToken = await fetch(`https://app.snipcart.com/api/requestvalidation/${token}`);

  if (!verifyToken.ok) {
      /* @ts-ignore */
    res.status(401).json({ message: "Not Authorized" });
    return;
  }

  try {
    switch (eventName) {
      case "order.completed":
          /* @ts-ignore */
        await createOrder(content);
        break;
      case "customauth:customer_updated":
          /* @ts-ignore */
        res.status(200).json({ message: "Customer updated - no action taken" });
        return;
      default:
        throw new Error("No such event handler exists");
    }
  /* @ts-ignore */
    res.status(200).json({ message: "Done" });
  } catch (err) {
    console.log(err);
      /* @ts-ignore */
    res.status(500).json({ message: "Something went wrong" });
  }
}

async function parseBody(req: Request) {
  const body = await req.json();
  return { eventName: body.eventName, content: body.content };
}