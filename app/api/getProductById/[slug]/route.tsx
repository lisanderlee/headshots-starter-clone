export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
    mode: "no-cors",
  };
console.log("ESTO", params.slug)
  const res = await fetch(`https://api.printful.com/sync/products/${params.slug}`, {
    headers: headers,
  });

  const productDetails = await res.json();
  /* @ts-ignore */
  return Response.json({ productDetails });
}
