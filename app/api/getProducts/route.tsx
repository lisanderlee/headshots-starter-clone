export async function GET(request: Request) {
  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
    mode: "no-cors",
  };

  const res = await fetch(`https://api.printful.com/sync/products/`, {
    headers: headers,
  });

  const products = await res.json();
  /* @ts-ignore */
  return Response.json({ products });
}
