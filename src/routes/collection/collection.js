import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard";

const Collection = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <Fragment>
          {Object.keys(categoriesMap).map((title) => (
            <Fragment key={title}>
              <Link to={`${title}`} className="text-xl font-bold text-gray-900">
                {title.toUpperCase()}
              </Link>
              <div className="mt-8 mb-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {categoriesMap[title]
                  .filter((_, idx) => idx < 4)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </Fragment>
          ))}
        </Fragment>
      </div>
    </div>
  );
};

export default Collection;
