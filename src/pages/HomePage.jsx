import { AllCategoryProducts } from "../Component/allCategoryProducts/AllCategoryProducts";
import { SliderHome } from "../Component/slider/SliderHome";
import { SmartPhones } from "../Component/smartPhones/SmartPhones";
import { TitleOfCategories } from "../Component/titleOfCategories/TitleOfCategories";
import "./HomePage.scss";
import { Laptops } from "../Component/laptops/Laptops";
import { Fragrances } from "../Component/fragrances/Fragrances";
import { Skincare } from "../Component/skincare/Skincare";
import { Footer } from "../Component/footer/Footer";

export const HomePage = () => {
  return (
    <div>
      <SliderHome />
      <TitleOfCategories title="See Our Products" />
      <AllCategoryProducts />
      <TitleOfCategories title="Smart Phones" />
      <SmartPhones />
      <TitleOfCategories title="LAPTOPS" />
      <Laptops />
      <TitleOfCategories title="FRAGRANCES" />
      <Fragrances />
      <TitleOfCategories title="SKINCARE" />
      <Skincare />
      <Footer />
    </div>
  );
};
