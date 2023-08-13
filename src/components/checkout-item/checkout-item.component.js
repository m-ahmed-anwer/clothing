import React, { useContext } from "react";
import "../../App.css";
import { CartContext } from "../../context/cart.context";

function CheckOutItem({ cartItems }) {
  const { name, finalPrice, quantity, imageUrl, originalPrice } = cartItems;

  const { removeItemFromCart, incrementItem, decrementItem } =
    useContext(CartContext);

  const removeFromCart = () => removeItemFromCart(cartItems);

  const increment = () => incrementItem(cartItems);
  const decrement = () => decrementItem(cartItems);

  return (
    <div class="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={imageUrl}
        alt="product-image"
        class="w-full rounded-lg sm:w-40"
      />
      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="pt-1 text-lg font-bold text-gray-900">{name}</h2>
        </div>
        <div class="im mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <div class="flex items-center border-gray-100">
            <span
              class="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={decrement}
            >
              {" "}
              -{" "}
            </span>
            <input
              class="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              value={quantity}
              min="1"
            />
            <span
              class="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
              onClick={increment}
            >
              {" "}
              +{" "}
            </span>
          </div>
          <div class=" flex items-center space-x-10 pt-10">
            <span className="text-sm text-slate-900 line-through">
              ${originalPrice * quantity}
            </span>

            <p class="text-lg">$ {finalPrice * quantity}</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={removeFromCart}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutItem;
