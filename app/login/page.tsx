import { Button } from "@/components/ui/button";
import Messages from "./messages";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/wonderlogo.svg"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InternalNav from "@/components/InternalNav";
export const dynamic = "force-dynamic";

export default async function Login() {
  return (
    <>
      <div className="bg-dark h-screen flex flex-col justify-center items-center ">
      <Link href="/">
          <div className="flex flex-row mb-5 ">
            <Image src={Logo} width={30} height={30} alt="Logo Wonder" />
            <h2 className="  text-2xl lg:text-3xl text-primary ml-2 ">
              <span className="font-semibold">Wonder</span>
              <span className=" font-normal">Merch</span>
            </h2>
          </div>
        </Link>
        <div className="mx-auto flex flex-col w-full px-8 sm:max-w-md gap-2">
          <form
            className="flex-1 flex flex-col w-full gap-2 "
            action="/auth/sign-in"
            method="post"
          >
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Log In / Sign Up</CardTitle>
                <CardDescription>
                  Log into your account or sign up for a new one to get started.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Label className="text-md" htmlFor="email">
                  Email
                </Label>
                <input
                  className="rounded-md px-4 py-2 bg-inherit border"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
                <Button>Continue</Button>
                <Messages />
              </CardContent>
              <CardFooter>
                <p className="text-sm">
                  By signing up, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
}
