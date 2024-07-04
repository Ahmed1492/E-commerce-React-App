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
export const Navbar = () => {
  const [myCategoreis, setMyCategories] = useState([]);
  const [isOpenedMenue, setIsOpenedMenue] = useState(false);
  const getCategories = async () => {
    try {
      let myResponse = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      let categories = myResponse.data;
      let getSomeCategory = categories.splice(0, 9);
      setMyCategories(getSomeCategory);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  });

  return (
    <div className="navbar spaceX">
      <LeftMenue
        isOpenedMenue={isOpenedMenue}
        setIsOpenedMenue={setIsOpenedMenue}
      />
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
            <ShoppingCartIcon className="cartIcone" />
          </div>
        </div>
      </div>
    </div>
  );
};
