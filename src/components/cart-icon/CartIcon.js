import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/CartItem";

const CartIcon = () => {
  const { cartItems, cartCount } = useContext(CartContext);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-full bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className="sr-only">Open options</span>
          <ShoppingIcon className="h-5 w-5" aria-hidden="true" />
          <span className="absolute text-xs text-gray-600 left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2">
            {cartCount}
          </span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <div className="flex flex-col">
                {cartItems.length ? (
                  cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                  ))
                ) : (
                  <span className="text-center mx-auto">
                    Your cart is empty
                  </span>
                )}
              </div>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="/checkout"
                className="text-center block w-3/4 mx-auto my-3 rounded-md border border-transparent bg-indigo-600 py-2 px-2 font-medium text-sm text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CartIcon;
