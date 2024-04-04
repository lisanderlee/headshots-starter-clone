import blur from "/public/blur.png";
import example from "/public/example.png";
import result from "/public/result.png";
import SourcePic from "/public/images/source.png";
import ResultPic from "/public/images/result.png";
import Image from "next/image";
export default function Explainer() {
  return (
    <div className="w-full px-5 2xl:px-40  xl:px-30 lg:px-20  bg-primary  pt-24 pb-10 lg:pb-20 lg:pt-10">
      <div className="flex  justify-between items-center flex-col lg:flex-row">
        <div className=" flex flex-col max-w-2xl">
          <h1 className="text-secondary text-6xl  2xl:text-9xl xl:text-9xl  lg:text-7xl font-bold">
            Unleash the Crazy:
          </h1>
          <p className="text-white  lg:max-w-lg xl:max-w-xl  mt-4  text-xl  xl:text-3xl 2xl:text-3xl  lg:text-xl">
            Snap a selfie and let our AI work its mischief – from madcap
            superheroes to zany animal hybrids!
          </p>
        </div>

        <div className="flex mt-16 lg:mt-0  flex-col">
          <p className="  font-normal max-w-lg text-right mt-4  text-white text-xl">
            The more credits you buy the cheaper they get.
          </p>
          <div className="border-2 flex mt-4 py-2 items-center flex-row justify-between  border-white rounded-2xl">
            <div className="flex flex-col  px-3 lg:px-5  items-center">
              <p className=" text-accent font-medium  text-7xl lg:text-9xl">
                05
              </p>
              <p className="text-accent text-md lg:text-2xl    font-medium">
                for $3.99
              </p>
            </div>
            <div className="border-l-2 h-28 " />
            <div className="flex flex-col   px-3 lg:px-5  items-center">
              <p className=" text-accent font-medium  text-7xl lg:text-9xl">
                10
              </p>
              <p className="text-accent text-lg lg:text-2xl  font-medium">
                for $5.99
              </p>
            </div>
            <div className="border-l-2 h-28 " />
            <div className="flex flex-col px-3 lg:px-5  items-center">
              <p className=" text-accent font-medium text-7xl lg:text-9xl">
                20
              </p>
              <p className="text-accent text-lg lg:text-2xl font-medium">
                for $8.99
              </p>
            </div>
          </div>
          <p className="  font-normal max-w-lg text-right mt-4  text-white text-xl">
            Each credit lets you run one creating. Each creating gives you 4
            different results.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center mt-24 lg:px-0 px-20 lg:gap-y-0 gap-y-10 flex-col lg:flex-row justify-between">
        <div className=" flex  rotate-12 flex-col ">
          <Image
            src={SourcePic}
            width={300}
            className="rounded-2xl"
            alt="example pic"
          />
          <p className="text-white mt-4 text-xl text-center">
            Upload an image.
          </p>
        </div>
        <div className=" flex  rotate-12 flex-col ">
          <Image
            src={SourcePic}
            width={300}
            className="rounded-2xl blur-md	"
            alt="example pic"
          />
          <p className="text-white mt-4 text-xl text-center">
            Let the wonder happen.
          </p>
        </div>
        <div className=" flex  rotate-12 flex-col ">
          <Image
            src={ResultPic}
            width={300}
            className="rounded-2xl"
            alt="example pic"
          />
          <p className="text-white mt-4 text-xl text-center">Get fun results</p>
        </div>
      </div>
    </div>
  );
}
