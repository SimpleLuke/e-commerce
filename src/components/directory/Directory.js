import Banner from "../banner/Banner";
import CategoryItem from "../category-item/Category-item";
const Directory = ({ categories }) => {
  return (
    <div>
      <Banner />
      <CategoryItem categories={categories} />
    </div>
  );
};

export default Directory;
