import { useEffect, useState } from "react";
import "./AllCategoryProducts.scss";
import axios from "axios";
import { Link } from "react-router-dom";
export const AllCategoryProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      let myResponse = await axios.get("https://dummyjson.com/products");
      setAllProducts(myResponse.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  function truncateToTwoDecimals(num) {
    return parseFloat(num.toFixed(2));
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="allCategories">
      <div className="allCards spaceX">
        {allProducts?.map((singleProduct, index) => (
          <Link to="/path" key={index} className="singleCard">
            <div className="categoryMark">
              <div className="side"></div>
              <p>{singleProduct.category}</p>
            </div>
            <div className="image">
              <img src={singleProduct.images[0]} alt="" />
            </div>
            <div className="desc">
              <p>
                Brand:{" "}
                {singleProduct.brand ? (
                  <span className="brandName">{singleProduct.brand}</span>
                ) : (
                  <span className="brandName">No Brand</span>
                )}
              </p>
              <p>{singleProduct.title}</p>
              <div className="price">
                <del>${singleProduct.price}</del>
                <span>
                  $
                  {truncateToTwoDecimals(
                    singleProduct.price -
                      (singleProduct.discountPercentage * singleProduct.price) /
                        100
                  )}
                </span>
                <p className="offer">
                  ({singleProduct.discountPercentage}% <br /> off)
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};
