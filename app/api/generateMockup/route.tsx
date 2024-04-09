

export async function POST(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const body = await request.json();
  // console.log(body);
  // console.log(params.slug);
  const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "X-PF-Store-Id": "13335936",
    "Content-Type": "application/json",
    "Connection":"keep-alive",
    "Accept-Encoding":"gzip, deflate, br",
    "Accept":"*/*"
  };

  const res = await fetch(
    `https://api.printful.com/v2/mockup-tasks`,
    {
      method: "POST",
      headers: headers,
      // body: body
      body: JSON.stringify(body),
    }
  );

  const bodyData = await res.json();
  console.log("Response body1:", bodyData);
  return new Response(JSON.stringify(bodyData))
}
