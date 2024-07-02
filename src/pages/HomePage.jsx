import { AllCategoryProducts } from "../Component/allCategoryProducts/AllCategoryProducts";
import { SliderHome } from "../Component/slider/SliderHome";
import { TitleOfCategories } from "../Component/titleOfCategories/TitleOfCategories";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div>
      <SliderHome />
      <TitleOfCategories title="See Our Products" />
      <AllCategoryProducts />
      <TitleOfCategories title="Smart Phones" />
    </div>
  );
};
