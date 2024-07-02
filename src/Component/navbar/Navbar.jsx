import "./Navbar.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
export const Navbar = () => {
  return (
    <div className="navbar spaceX">
      <div className=" links ">
        <div className="left">
          <ul >
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
            <MenuIcon />
            <h2>
              <span>Snap</span>Up.
            </h2>
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
              <li>
                <Link>Smart Phone</Link>
              </li>
              <li>
                <Link>Labtop</Link>
              </li>
              <li>
                <Link>fragrances</Link>
              </li>
              <li>
                <Link>home-decoration</Link>
              </li>
              <li>
                <Link>mens-shoes</Link>
              </li>
              <li>
                <Link>mobile-accessories</Link>
              </li>
              <li>
                <Link>womens-dresses</Link>
              </li>
              <li>
                <Link>sunglasses</Link>
              </li>
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
