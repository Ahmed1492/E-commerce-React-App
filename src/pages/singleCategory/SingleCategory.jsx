import { Link, useParams } from "react-router-dom";
import "./SingleCategory.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { TitleOfCategories } from "../../Component/titleOfCategories/TitleOfCategories";

export const SingleCategory = ({ url }) => {
  const param = useParams();
  const [allProducts, setAllProducts] = useState([]);
  let categoryNameURL = param.name;
  let categoryName = param.name;

  let formattedCategory = categoryName.replace(/-/g, " ");

  formattedCategory = formattedCategory.replace(/\b\w/g, (match) =>
    match.toUpperCase()
  );
  // console.log(formattedCategory); // Outputs: "Home Decoration"

  const getCategroy = async () => {
    try {
      let myResponse = await axios.get(url + categoryNameURL);
      setAllProducts(myResponse.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  function truncateToTwoDecimals(num) {
    return parseFloat(num.toFixed(2));
  }
  useEffect(() => {
    getCategroy();
  }, [param]);
  return (
    <div className="allProductCategory">
      <TitleOfCategories title={`SEE OUR ${formattedCategory}`} />

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
