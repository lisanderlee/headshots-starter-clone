import { useContext } from "react";

import { WishlistStateContext } from "../context/whishlist";

const useWishlistState = () => {
  const context = useContext(WishlistStateContext);

  if (!context)
    throw new Error("useWishlistState must be used within a WishlistProvider");

  return context;
};

export default useWishlistState;