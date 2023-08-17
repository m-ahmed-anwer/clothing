import React, { Fragment, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../utils/Firebase/firebase.utils";
import { UserContext } from "../../context/context.component";

import CartIcon from "../cart-icon/cart.component";
import CartDropdown from "../cart-dropdown/cart.dropdown.component";
import { CartContext } from "../../context/cart.context";

function Navbar() {
  const { currentUser } = useContext(UserContext);

  const { isCartOpen, cartCount } = useContext(CartContext);

  const signOutHandler = async () => {
    await auth.signOut();
    alert("Signed out");
  };
  const [toggle, setToggle] = useState(false);

  const expand = () => {
    setToggle(!toggle);
  };

  return (
    <Fragment>
      <nav className="border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link to={"/"} className="flex items-center">
            <span className="ml-3 self-center whitespace-nowrap text-2xl font-semibold">
              Crown Clothing
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-solid-bg"
            aria-expanded={toggle}
            onClick={expand}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              toggle ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent ">
              <li>
                <Link
                  to={"/shop"}
                  className="block rounded py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0 md:hover:text-blue-700 "
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="block rounded py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0 md:hover:text-blue-700 "
                >
                  Contact
                </Link>
              </li>
              <li>
                {currentUser ? (
                  <button
                    className="w-full rounded-lg bg-red-600   px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={signOutHandler}
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    to={"/sign-up"}
                    className="block rounded py-2 pl-3 pr-4 text-black md:bg-transparent md:p-0 md:hover:text-blue-700 "
                  >
                    Sign up
                  </Link>
                )}
              </li>

              <li className="mt-4 block align-middle font-sans text-black hover:text-gray-700 lg:ml-6 lg:mt-0 lg:inline-block">
                <CartIcon count={cartCount} />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isCartOpen && <CartDropdown />}

      <Outlet />
    </Fragment>
  );
}

export default Navbar;
