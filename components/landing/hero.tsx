import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Mockup from "/public/images/mockup.png";

export default function Hero() {
  return (
    <div className="w-full flex h-full lg:px-40 px-5  bg-dark ">
      <div className="flex lg:flex-row flex-col lg:-mt-12  mt-16 justify-center items-center">
        <div className="flex flex-col  space-y-5 lg:space-y-10 lg:max-w-5xl  lg:w-1/2 w-full">
          <h1 className="xl:text-8xl lg:text-6xl text-7xl  text-primary  xl:leading-[80px] font-semibold">
            Fed up with snooze-worthy merch?
          </h1>
          <p className="text-white   text-xl lg:text-2xl">Time to dial up the fun factor!</p>
          <div className="flex lg:flex-row flex-col gap-x-5 lg:space-y-2 lg:items-center">
            <Link href="/login">
              <Button className=" text-xl py-7 px-12 text-terceary rounded-full ">
                Start for free
              </Button>
            </Link>
            <div className="mt-4 text-white">
              <span>Already a member? </span>
              <Link className="text-white hover:underline" href="/login">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-0 mt-5">
          <Image src={Mockup} alt="AI Mock up" />
        </div>
      </div>
    </div>
  );
}
