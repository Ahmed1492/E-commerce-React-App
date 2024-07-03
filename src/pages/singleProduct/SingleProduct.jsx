import axios from "axios";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "../../Component/footer/Footer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const SingleProduct = ({ url }) => {
  const [allProducts, setAllProducts] = useState([]);
  const param = useParams();
  const id = param.id;
  const getSingleProduct = async () => {
    try {
      let myRespone = await axios.get(url + id);
      setAllProducts(myRespone.data);
      console.log(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  function truncateToTwoDecimals(num) {
    return parseFloat(num.toFixed(2));
  }
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div className="singleProductDetails">
      <div className="spaceX">
        <div className="product">
          <div className="images">
            {allProducts?.images?.length > 1 ? (
              <img src={allProducts.images[0]} alt="" />
            ) : (
              <img src={allProducts.images} alt="" />
            )}
          </div>
          <div className="descriptions">
            <p className="title">{allProducts.title}</p>
            <p className="desc">{allProducts.description}</p>
            <div className="desc">
              <p>
                <span className="firstSpan">Rating</span>: {allProducts.rating}
              </p>
              <p>
                <span>Brand</span>:{" "}
                {allProducts.Brand ? allProducts.Brand : "No Brand"}
              </p>
              <p>
                <span>Category</span>: {allProducts.category}
              </p>
            </div>
            <div className="price">
              <del className="priceBrforeDesc">${allProducts.price}</del>
              <span className="taxes">(inclusive of all taxes)</span>
              <div className="disc">
                <p className="priceWithDesc">
                  $
                  {truncateToTwoDecimals(
                    allProducts.price -
                      (allProducts.discountPercentage * allProducts.price) / 100
                  )}
                </p>
                <p className="discount">
                  {allProducts.discountPercentage}% OFF
                </p>
              </div>
            </div>
            <div className="quantityOfProduct">
              <p>Quantity: </p>
              <div className="settingsOfNumber">
                <button>-</button>
                <span className="totlaNumberOfProduct">1</span>
                <button>+</button>
              </div>
            </div>
            <div className="buyProduct">
              <button className="addToCart">
                <span className="cartIcone">
                  <ShoppingCartIcon />
                </span>
                Add To Cart
              </button>
              <button className="buyNow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
