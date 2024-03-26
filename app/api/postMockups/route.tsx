import { NextRequest } from "next/server";
import { json } from "stream/consumers";

export async function POST (req: NextRequest) {
    const body = await req.json()
    
    console.log(body)

    const headers = {
        Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
        "X-PF-Store-Id": "13335936",
        "Content-Type": "application/json",
        mode: "no-cors",
      };


      const res = await fetch(`https://api.printful.com/mockup-generator/create-task/338961477`, {
        headers: headers,
        method: "POST",
        body:JSON.stringify(body)

      });

      const productDetails = await res.json();
      console.log(productDetails)
    return new Response('OK' )


}