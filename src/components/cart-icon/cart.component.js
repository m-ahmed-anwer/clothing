import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CartIcon({ count }) {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <div
        className="relative flex cursor-pointer"
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
      >
        <svg className="h-8 w-8 flex-1 fill-current" viewbox="0 0 24 24">
          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
        </svg>
        <span className="top right pointer-events-none absolute right-0 top-0 m-0 h-4 w-4 rounded-full bg-red-600 p-0 text-center font-mono  text-xs leading-tight text-white">
          {count}
        </span>
      </div>
    </>
  );
}

export default CartIcon;
