import { User } from "lucide-react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { Database } from "@/types/supabase";
import ClientSideCredits from "./realtime/ClientSideCredits";
import CartButton from "./shop/cart-button";
import Logo from "/public/wonderlogo.svg";
import Image from "next/image";


export const dynamic = "force-dynamic";

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

export const revalidate = 0;

export default async function InternalNav() {
  const supabase = createServerComponentClient<Database>({ cookies });


  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: credits } = await supabase
    .from("credits")
    .select("*")
    .eq("user_id", user?.id ?? "")
    .single();

  return (
    <div className="   flex w-full px-4 lg:px-40 py-6 items-center bg-dark text-center gap-8 justify-between ">
      <div className="flex gap-2 h-full">
        <Link href="/">
          <div className="flex flex-row ">
            <Image src={Logo} width={30} height={30} alt="Logo Wonder" />
            <h2 className="   text-2xl text-terceary ml-2 ">
              <span className="font-semibold">Creation</span>
              <span className=" font-normal">Merch</span>
            </h2>
          </div>
        </Link>
      </div>
      {user && (
        <div className="hidden lg:flex flex-row items-center justify-centeral gap-x-2 pt-1">
          <Link href="/overview">
            <button className=" text-terceary hover:bg-white/20 hover:rounded-full py-1 px-5" >Wonder Lab</button>
          </Link>
          <Link href="/shop">
          <button className=" text-terceary hover:bg-white/20 hover:rounded-full py-1 px-5"  >Shop</button>
          </Link>
          {!stripeIsConfigured && (
            <Link href="/get-credits">
              <button className=" text-terceary hover:bg-white/20 hover:rounded-full py-1 px-5" >Get Credits</button>
            </Link>
          )}
        </div>
      )}
      <div className="flex gap-4 lg:ml-auto ">
        {!user && (
          <Link href="/login">
            <button className=" text-terceary hover:bg-white/20 hover:rounded-full py-1 px-5" >Login / Signup</button>
          </Link>
        )}
        {user && (
          <div className="flex flex-row gap-4 text-center align-middle justify-center">
            {!stripeIsConfigured && (
              <ClientSideCredits creditsRow={credits ? credits : null} />
            )}

            <CartButton />

            {/* <ShoppingCart height={24} width={24} className="text-primary" /> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <User height={24} width={24} className="text-terceary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="text-terceary text-center overflow-hidden text-ellipsis">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <form action="/auth/sign-out" method="post">
                  <Button
                    type="submit"
                    className="w-full text-left text-terceary"
                   
                  >
                    Log out
                  </Button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
