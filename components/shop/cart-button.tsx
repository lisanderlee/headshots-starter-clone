"use client";
import { ShoppingCart } from "lucide-react";
import useSnipcartCount from "./hooks/useSnipcartCount";


export default function CartButton() {
    const { cart } = useSnipcartCount();
    const cartHasItems = cart.items.count !== 0;
    console.log(cart)
  return (

    <button
    className="snipcart-checkout appearance-none px-2 text-blue-600 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
    aria-label="Cart"
  >
    {cartHasItems && (
      <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
    )}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </svg>
  </button>
  );
}
