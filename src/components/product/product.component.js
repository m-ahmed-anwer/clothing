import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function Product({ product }) {
  const { name, finalPrice, originalPrice, imageUrl } = product;
  const offer = ((originalPrice - finalPrice) / finalPrice) * 100;

  const { addItemToCart, cartCount, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    if (cartCount === 0) {
      setTimeout(() => {
        setIsCartOpen(true);
      }, 500);
    }
  };
  const valueCheck = Math.round(offer * 1) / 1;

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img className="object-cover" src={imageUrl} alt="product image" />
        {valueCheck > 0 && (
          <span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {Math.round(offer * 1) / 1}% OFF
          </span>
        )}
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
        </a>
        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${finalPrice}
            </span>
            <span className="ml-3 text-sm text-slate-900 line-through">
              ${originalPrice}
            </span>
          </p>
        </div>
        <button
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={addProductToCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
