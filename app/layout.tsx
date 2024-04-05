import { Fredoka } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/landing/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Icons } from "@/components/icons";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

import Script from "next/script";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Headshots AI",
  description: "Generate awesome headshots in minutes using AI",
};
const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={fredoka.className}>
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-dark ">
        <section>
          {/* <Suspense
            fallback={
              <Icons.spinner className="h-12 w-12 animate-spin text-white" />
            }
          > */}
            <Script
              async
              src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
            />
            <div
              id="snipcart"
              data-config-modal-style="side"
              data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
              hidden
            ></div>
          {/* </Suspense> */}
        </section>

        <main className="w-full h-screen">{children}</main>
        <Footer />
        <Toaster />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
