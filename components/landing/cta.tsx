import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Cta() {
  return (
    <div className="w-full flex  items-center justify-center  px-5 lg:px-40 mx-auto bg-primary h-screen">
      <div className=" flex flex-col h-full justify-center items-center ">
        <h1 className="text-secondary  text-center text-6xl lg:text-9xl font-bold ">
          Ready to Rumble?
        </h1>
        <p className="text-white  max-w-2xl text-center mt-8 text-3xl">
          Hit upload and let the hilarity ensue! Let's make some memories – the
          wackier, the better!
        </p>
        <Link href="/login">
              <Button className=" text-xl py-7 px-12 text-terceary bg-secondary mt-10 rounded-full ">
                Start for free
              </Button>
            </Link>
      </div>
    </div>
  );
}
