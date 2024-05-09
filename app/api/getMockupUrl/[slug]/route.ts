// pages/api/printful/[slug].js

import { NextApiRequest, NextApiResponse } from 'next';

export async function GET( request: Request,
  { params }: { params: { slug: string } }) {
 // Extract the slug from the request query parameters
 const  slug  = params.slug

// const slug = 655019651

 // Define the headers for the Printful API request
 const headers = {
    Authorization: `Bearer ${process.env.PRINTIFUL_KEY}`,
    "Content-Type": "application/json",
 };

    // Make a request to the Printful API to fetch mockup tasks
    const response = await fetch(`https://api.printful.com/v2/mockup-tasks?id=${slug}`, {
      headers: headers,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    // Parse the response body as JSON
    const newMockups = await response.json();

    return new Response(JSON.stringify(newMockups), {
      headers: { "Content-Type": "application/json" },
      
    });
 
}


