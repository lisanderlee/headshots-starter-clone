
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Headshots AI",
  description: "Generate awesome headshots in minutes using AI",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
   
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }
          >
               <Script
            async
            src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
          />
         <div
            id="snipcart"
            data-config-modal-style="side"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            hidden
          >
    
              <div className="snipcart-form__field">
                <snipcart-label for="phone">Phone number</snipcart-label>
                <snipcart-input name="phone"></snipcart-input>
              </div>
         
          </div>
            <Navbar />
            
          </Suspense>
        </section>
     
        <main className="flex flex-1 flex-col items-center py-16">
      
          {children}
        </main>
        <Footer />
        <Toaster />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}