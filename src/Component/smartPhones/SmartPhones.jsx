import axios from "axios";
import "./SmartPhones.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SmartPhones = () => {
  const [allProducts, setAllProducts] = useState([]);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const getAllProducts = async () => {
    try {
      let myResponse = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      let allProducts = myResponse.data.products;

      // Shuffle the products array
      let shuffledProducts = shuffleArray(allProducts); // Shuffle a copy of the array

      // Take the first 5 elements of the shuffled array
      let randomFiveProducts = shuffledProducts.slice(0, 5);

      // Set the random five products in the state
      setAllProducts(randomFiveProducts);
    } catch (error) {
      console.log(error);
    }
  };

  function truncateToTwoDecimals(num) {
    return parseFloat(num.toFixed(2));
  }

  useEffect(() => {
    getAllProducts();
    // console.log(allProducts);
  }, []);
  return (
    <div className="smartPhones">
      <div className="allCards spaceX">
        {allProducts?.map((singleProduct, index) => (
          <Link
            to={`/product/${singleProduct.id}`}
            key={index}
            className="singleCard"
          >
            <div className="categoryMark">
              <div className="side"></div>
              <p>{singleProduct.category}</p>
            </div>
            <div className="image">
              <img src={singleProduct.images[0]} alt="" />
            </div>
            <div className="desc">
              <p>
                Brand:
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
