import { Outlet, NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SignIn from "../sign-in/SignIn";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Navigation = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:flex sm:space-x-8 sm:ml-auto">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <NavLink
                      to="/collections"
                      className={({ isActive }) =>
                        classNames(
                          isActive ? "border-indigo-500" : "border-transparent",
                          "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        )
                      }
                    >
                      Collections
                    </NavLink>
                    <NavLink
                      to="/auth"
                      className={({ isActive }) =>
                        classNames(
                          isActive ? "border-indigo-500" : "border-transparent",
                          "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        )
                      }
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      to="/cart"
                      className={({ isActive }) =>
                        classNames(
                          isActive ? "border-indigo-500" : "border-transparent",
                          "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        )
                      }
                    >
                      Cart
                    </NavLink>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              {({ close }) => (
                <div className="space-y-1 pt-2 pb-4">
                  {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                  <Disclosure.Button as="div">
                    <NavLink
                      onClick={close}
                      to="/collections"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                          "block border-l-4  py-2 pl-3 pr-4 text-base font-medium "
                        )
                      }
                    >
                      Collections
                    </NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button as="div">
                    <NavLink
                      onClick={close}
                      to="/auth"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                          "block border-l-4  py-2 pl-3 pr-4 text-base font-medium "
                        )
                      }
                    >
                      Sign In
                    </NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button as="div">
                    <NavLink
                      onClick={close}
                      to="/cart"
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                          "block border-l-4  py-2 pl-3 pr-4 text-base font-medium "
                        )
                      }
                    >
                      Cart
                    </NavLink>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </>
  );
};
export default Navigation;
