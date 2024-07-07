import { useSelector } from "react-redux";
import "./ProductsBasket.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ProductsBasket = () => {
  const imageUrl =
    "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png";
  const productInCart = [
    {
      imaga: imageUrl,
      productName: "Chicken Meat",
      productPrice: 83.0,
    },
    {
      imaga: imageUrl,
      productName: "Chicken Meat",
      productPrice: 83.0,
    },
    {
      imaga: imageUrl,
      productName: "Chicken Meat",
      productPrice: 83.0,
    },
  ];

  const products = useSelector((state) => state.cart.products);

  return (
    <div className="productsBasket">
      <h3>Recently Added Products</h3>
      <div className="allProducts">
        {products.map((product, index) => (
          <div key={index} className="singleProduct">
            <div className="singleProductDetails">
              <img src={product.image} alt="" />
              <p>{product.title}</p>
            </div>
            <div className="productPrice">
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="viewCart">
        <Link to="/cart" className="viewCartButton">
          View My Shopping Cart
        </Link>
      </div>
    </div>
  );
};
