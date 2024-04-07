export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
    "Connection":"keep-alive",
    "Accept-Encoding":"gzip, deflate, br",
    "Accept":"*/*"

  };

  const res = await fetch(`https://api.printful.com/v2/mockup-tasks?id=${params.slug}`, {
    headers: headers,
  });

  const newMockups = await res.json();

  /* @ts-ignore */
  return Response.json(newMockups);
}
