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
  console.log(params.slug)
  const res = await fetch(`  https://api.printful.com/mockup-generator/task?task_key=${params.slug}`, {
    headers: headers,
  });
  console.log(res)
  const newMockups = await res.json();

  /* @ts-ignore */
  return Response.json(newMockups);
}
