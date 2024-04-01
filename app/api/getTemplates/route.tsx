export async function GET(request: Request) {
  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",

  };

  const res = await fetch(`https://api.printful.com/product-templates/read`, {
    headers: headers,
  });

  const templates = await res.json();

  /* @ts-ignore */
  return Response.json(templates );
}
