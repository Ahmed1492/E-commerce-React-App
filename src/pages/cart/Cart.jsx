import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { useState } from "react";
import { removeItem, resetCart } from "../../redux/cartReducer";

export const Cart = () => {
  const [iscick, setIsclic] = useState(false);

  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  const getTotalPrice = () => {
    let total = 0;
    products?.forEach((item) => (total += +item.quantity * +item.price));
    return total?.toFixed(2);
  };
  console.log(getTotalPrice());
  return (
    <div className="spaceX">
      <div className="cartTable">
        <table>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th onClick={() => setIsclic(!iscick)}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product?.title}</td>
                <td>${product?.price}</td>
                <td>{product?.quantity}</td>
                <td>${product?.price * product?.quantity?.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => dispatch(removeItem(product.id))}
                    className="deleteFromCart"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="totalBox">
          <div className="top">
            <div>
              <button onClick={() => dispatch(resetCart())} className="clearCash">
                {" "}
                Clear Cash
              </button>
            </div>

            <div className="finalTotal">
              <p>Total ({products.length} Items) :</p>
              <span>${getTotalPrice()}</span>
            </div>
          </div>
          <div className="bottom">
            <button className="deleteFromCart CheckOut "> CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};
