export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
  };

  const res = await fetch(
    `https://api.printful.com/v2/sync-products/${params.slug}/sync-variants`,
    {
      headers: headers,
    }
  );

  const productVariants = await res.json();

  /* @ts-ignore */
  return Response.json(productVariants);
}
