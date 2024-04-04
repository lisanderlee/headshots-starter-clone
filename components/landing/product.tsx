import Woman from "/public/images/woman.png";
import Image from "next/image";
export default function Product() {
  return (
    <div className="w-full px-5 lg:px-40 bg-dark pt-10">
      <div className="flex justify-between gap-x-10  flex-col-reverse lg:flex-row">
        <Image src={Woman} alt="Image" className="aspect-auto" width={600} />
        <div className=" flex flex-col h-full  lg:mt-36  max-w-2xl">
          <h1 className="text-primary text-6xl  2xl:text-9xl xl:text-9xl  lg:text-7xl font-bold">
            Print Your Creation:{" "}
          </h1>
          <p className="text-white  lg:max-w-lg xl:max-w-xl  mt-4  text-xl  xl:text-3xl 2xl:text-3xl  lg:text-xl">
            Stick your riotous creation on everything from mugs to mousepads.
            The world needs to see your funny side!
          </p>
          <div className="flex mt-10  flex-col  gap-y-5 lg:gap-x-5 lg:flex-row justify-between lg:mb-10 mb-10">
            <div className="flex flex-row gap-x-5">
              <div className=" w-40 h-48  bg-white rounded-2xl"></div>
              <div className=" w-40 h-48  bg-white rounded-2xl"></div>
            </div>
            <div className="flex flex-row gap-x-5">
              <div className=" w-40 h-48  bg-white rounded-2xl"></div>
              <div className=" w-40 h-48  bg-white rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
