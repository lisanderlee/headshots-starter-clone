import Link from "next/link";
import Image from "next/image";
import Logo from "/public/wonderlogo.svg";
export default function Footer() {
  return (
    <footer className="relative  text-center  bg-gray-900 px-4 lg:px-40 py-4 h-full  sm:h-20 w-full sm:py-2 pt-4  flex sm:flex-row flex-col justify-between items-center space-y-3 sm:mb-0 mb-3 border-gray-200">
      <Link href="/">
        <div className="flex lg:flex-row flex-col ">
          <Image src={Logo} width={30} height={30} alt="Logo Wonder" />
        </div>
      </Link>
      <p className="text-white">WonderMerch all right reserved.</p>
    </footer>
  );
}
