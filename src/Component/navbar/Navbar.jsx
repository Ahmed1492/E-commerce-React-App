import "./Navbar.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { LeftMenue } from "../leftMenue/LeftMenue";
import { ProductsBasket } from "../productsBasket/ProductsBasket";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const [myCategoreis, setMyCategories] = useState([]);
  const [isOpenedMenue, setIsOpenedMenue] = useState(false);
  const [isOpenedCartProducts, setIsOpenedCartProducts] = useState(false);
  const [numberOfLinksInEachScreen, setNumberOfLinksInEachScreen] = useState(9);
  const handleNumberOfLinksInEachScreen = () => {
    if (window.screen.width <= 1486) {
      setNumberOfLinksInEachScreen(7);
    }
  };
  const getCategories = async () => {
    try {
      let myResponse = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      let categories = myResponse.data;
      let getSomeCategory = categories.splice(0, numberOfLinksInEachScreen);
      setMyCategories(getSomeCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const products = useSelector((state) => state?.cart?.products);

  useEffect(() => {
    getCategories();
    handleNumberOfLinksInEachScreen();
    console.log(numberOfLinksInEachScreen);
  }, []);

  return (
    <div className="navbar spaceX">
      <LeftMenue
        isOpenedMenue={isOpenedMenue}
        setIsOpenedMenue={setIsOpenedMenue}
      />
      {isOpenedCartProducts && <ProductsBasket />}
      <div className=" links ">
        <div className="left">
          <ul>
            <li>
              <Link>Seller Center</Link>
            </li>
            <li>
              <Link>Dwonload</Link>
            </li>
            <li>
              <Link className="socialLinks">
                <p> Follow us on</p>
                <FacebookIcon />
                <InstagramIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>Register</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="filterProducts">
        <div className="left">
          <div className="logo">
            <button onClick={() => setIsOpenedMenue(true)}>
              <MenuIcon />
            </button>
            <Link to="/">
              <span>Snap</span>Up.
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="input">
            <input type="text" placeholder="Search Your Pereferd Items Here" />
            <button className="searchbutton">
              <SearchIcon className="searchIcone" />
            </button>
          </div>
          <div className="categories">
            <ul>
              {myCategoreis.map((category, index) => {
                let categoryName = category;
                let formattedCategory = categoryName.replace(/-/g, " ");
                formattedCategory = formattedCategory.replace(
                  /\b\w/g,
                  (match) => match.toUpperCase()
                );
                return (
                  <li key={index}>
                    <Link to={`category/${category}`}>{formattedCategory}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="cart">
            <button
              onClick={() => setIsOpenedCartProducts(!isOpenedCartProducts)}
            >
              <ShoppingCartIcon className="cartIcone" />
            </button>
            <div className="numberOfProducts">{products.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
