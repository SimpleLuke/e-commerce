import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { inputStyle } from "./payment-style";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { CartItem } from "../../store/cart/cart.types";

import { RadioGroup } from "@headlessui/react";
import {
  CheckCircleIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/20/solid";
const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: "$5.00",
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00" },
];
const paymentMethods = [{ id: "credit-card", title: "Credit card" }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const PaymentForm = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const clearItemHandler = (cartItem: CartItem) =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = (cartItem: CartItem) =>
    dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = (cartItem: CartItem) =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  return (
    <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
      <div>
        <div>
          <h2 className="text-lg font-medium text-gray-900">
            Contact information
          </h2>

          <div className="mt-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email-address"
                name="email-address"
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-10">
          <h2 className="text-lg font-medium text-gray-900">
            Shipping information
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="apartment"
                className="block text-sm font-medium text-gray-700"
              >
                Apartment, suite, etc.
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <div className="mt-1">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                >
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Postal code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-10">
          <RadioGroup
            value={selectedDeliveryMethod}
            onChange={setSelectedDeliveryMethod}
            name="delivery-method"
          >
            <RadioGroup.Label className="text-lg font-medium text-gray-900">
              Delivery method
            </RadioGroup.Label>

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              {deliveryMethods.map((deliveryMethod) => (
                <RadioGroup.Option
                  key={deliveryMethod.id}
                  value={deliveryMethod}
                  className={({ checked, active }) =>
                    classNames(
                      checked ? "border-transparent" : "border-gray-300",
                      active ? "ring-2 ring-indigo-500" : "",
                      "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                    )
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <span className="flex flex-1">
                        <span className="flex flex-col">
                          <RadioGroup.Label
                            as="span"
                            className="block text-sm font-medium text-gray-900"
                          >
                            {deliveryMethod.title}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className="mt-1 flex items-center text-sm text-gray-500"
                          >
                            {deliveryMethod.turnaround}
                          </RadioGroup.Description>
                          <RadioGroup.Description
                            as="span"
                            className="mt-6 text-sm font-medium text-gray-900"
                          >
                            {deliveryMethod.price}
                          </RadioGroup.Description>
                        </span>
                      </span>
                      {checked ? (
                        <CheckCircleIcon
                          className="h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                      ) : null}
                      <span
                        className={classNames(
                          active ? "border" : "border-2",
                          checked ? "border-indigo-500" : "border-transparent",
                          "pointer-events-none absolute -inset-px rounded-lg"
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Payment */}
        <div className="mt-10 border-t border-gray-200 pt-10">
          <h2 className="text-lg font-medium text-gray-900">Payment</h2>

          <fieldset className="mt-4">
            <legend className="sr-only">Payment type</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
              {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                <div key={paymentMethod.id} className="flex items-center">
                  {paymentMethodIdx === 0 ? (
                    <input
                      id={paymentMethod.id}
                      name="payment-type"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  ) : (
                    <input
                      id={paymentMethod.id}
                      name="payment-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  )}

                  <label
                    htmlFor={paymentMethod.id}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {paymentMethod.title}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
            <div className="col-span-4">
              <label
                htmlFor="name-on-card"
                className="block text-sm font-medium text-gray-700"
              >
                Name on card
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name-on-card"
                  name="name-on-card"
                  autoComplete="cc-name"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card number
              </label>
              <div className="mt-1">
                <div className="border py-2 px-3 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <CardNumberElement
                    options={{
                      style: {
                        base: inputStyle,
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <div className="border py-2 px-3 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <CardExpiryElement
                    options={{
                      style: {
                        base: inputStyle,
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <div className="mt-1">
                <div className="border py-2 px-3 bg-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <CardCvcElement
                    options={{
                      style: {
                        base: inputStyle,
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order summary */}
      <div className="mt-10 lg:mt-0">
        <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
          <h3 className="sr-only">Items in your cart</h3>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((product) => (
              <li key={product.id} className="flex px-4 py-6 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-20 rounded-md"
                  />
                </div>

                <div className="ml-6 flex flex-1 flex-col">
                  <div className="flex">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium text-gray-700">
                        {product.name}
                      </h4>
                    </div>

                    <div className="ml-4 flow-root flex-shrink-0">
                      <button
                        onClick={() => clearItemHandler(product)}
                        type="button"
                        className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Remove</span>
                        <TrashIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-1 items-end justify-between pt-2">
                    <div>
                      <p className="mt-1 text-sm font-medium text-gray-500">
                        qty.{product.quantity}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        £{product.price}
                      </p>
                    </div>

                    <div className="ml-4">
                      <button
                        onClick={() => addItemHandler(product)}
                        type="button"
                        className="rounded-full bg-gray-50 p-1 text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        onClick={() => removeItemHandler(product)}
                        type="button"
                        className="rounded-full bg-gray-50 p-1 text-black shadow-sm hover:bg-gray-100  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <dt className="text-base font-medium">Total</dt>
              <dd className="text-base font-medium text-gray-900">
                £{cartTotal}
              </dd>
            </div>
          </dl>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;