import React, { useContext, useEffect } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const {
    cartCount,
    cartItems,
    totalCalculation,
    subTotal,
    tax,
    shipping,
    finalToPay,
  } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (cartCount <= 0) {
      navigate("/shop");
    }
  }, [cartItems]);

  return (
    <>
      <div className="h-auto bg-gray-100 py-20 ">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item) => {
              return <CheckOutItem cartItems={item} key={item.id} />;
            })}
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${subTotal}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Discount</p>
              <p className="text-gray-700  ">
                $ -{subTotal - totalCalculation}
              </p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Total</p>
              <p className="text-gray-700">$ {totalCalculation}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Estimated Shipping</p>
              <p className="text-gray-700">$ {shipping}</p>
            </div>

            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">
                Tax {"("}
                <span className="text-sm text-gray-500">5%</span>
                {")"}
              </p>
              <p className="text-gray-700">$ {tax}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">TOTAL TO PAY</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$ {finalToPay} USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
