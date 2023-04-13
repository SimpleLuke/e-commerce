import { Link } from "react-router-dom";

const CategoryItem = ({ categories }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2
          data-test="title"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop by Collection
        </h2>
        <p data-test="text" className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the modern world.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <Link
              to={category.route}
              data-test="category-item"
              key={category.name}
              className="group block"
            >
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center hover:scale-110 ease-in duration-700"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
