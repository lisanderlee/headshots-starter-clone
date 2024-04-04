import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Hero from "@/components/landing/hero";
import Explainer from "@/components/landing/explainer";
import Product from "@/components/landing/product";
import Cta from "@/components/landing/cta";
import Navbar from "@/components/landing/Navbar";



export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <>
      <Navbar />
      <Hero />
       <Explainer />
      <Product />
      <Cta /> 
    </>
  );
}
