"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Profile from "/public/images/profile.png";
import Result from "/public/images/result.png";
import Image from "next/image";

export default function FirstTrain({ model }: any) {
  return (
    <>
      <div className=" flex flex-col gap-y-10  -mt-20 ">
        <div className="flex ">
          <div className="   -rotate-12  w-56 aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
              src={Profile}
              alt="Model"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div className="   rotate-12    w-56 aspect-h-1 aspect-w-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
              src={Result}
              alt="Model"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
        </div>

        <div className=" flex justify-center text-center items-center  gap-y-5  flex-col">
          <p className="font-normal max-w-lg text-right  text-white text-lg">
            The more credits you buy the cheaper they get.
          </p>
          <div className="border-2 flex w-96 py-2 px-3 items-center flex-row justify-between  border-white rounded-2xl">
            <div className="flex flex-col   lg:px-2  items-center">
            <p className=" text-accent font-medium  text-7xl lg:text-7xl">
                05
              </p>
              <p className="text-accent text-md lg:text-xl    font-medium">
                for $3.99
              </p>
            </div>
            <div className="border-l-2 h-28 " />
            <div className="flex flex-col    lg:px-2  items-center">
              <p className=" text-accent font-medium  text-7xl lg:text-7xl">
                10
              </p>
              <p className="text-accent text-lg lg:text-xl  font-medium">
                for $5.99
              </p>
            </div>
            <div className="border-l-2 h-28 " />
            <div className="flex flex-col lg:px-2  items-center">
              <p className=" text-accent font-medium text-7xl lg:text-7xl">
                20
              </p>
              <p className="text-accent text-lg lg:text-xl font-medium">
                for $8.99
              </p>
            </div>
          </div>
          <p className="  font-normal max-w-sm text-center mt-4  text-white text-lg">
            Each credit lets you run one creating. Each creating gives you 4
            different results.{" "}
          </p>

          <Link href="/overview/models/train">
            <Button className=" text-xl py-7  px-12 text-terceary rounded-full ">
              Start for free
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
