import { useContext } from "react";

import { WishlistDispatchContext } from "../context/whishlist";

const useWishlistDispatch = () => {
  const context = useContext(WishlistDispatchContext);

  if (!context)
    throw new Error(
      "useWishlistDispatch must be used within a WishlistProvider"
    );

  return context;
};

export default useWishlistDispatch;