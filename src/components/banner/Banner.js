import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-6 px-4 sm:py-8 sm:px-6 lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-lg lg:h-96">
          <div className="absolute inset-0">
            <img
              data-test="banner-bg"
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
            <div>
              <h2
                data-test="banner-title"
                className="text-xl font-bold text-white"
              >
                Fashion Collection
              </h2>
              <p data-test="banner-text" className="mt-1 text-sm text-gray-300">
                Upgrade your wardrobe with fashionable items that keep you shine
                and fabulous.
              </p>
            </div>
            <Link
              to="collections"
              data-test="banner-btm"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
            >
              View the collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
