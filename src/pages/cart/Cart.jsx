import { useSelector } from "react-redux";
import "./Cart.scss";
import { useState } from "react";

export const Cart = () => {
  const [iscick, setIsclic] = useState(false);

  const productCart = [
    {
      id: 1,
      product: "Plastic Table",
      unitPrice: 433,
      Quantity: 22,
      totlaPrice: 1300,
    },
    {
      id: 2,
      product: "Wooden Chair",
      unitPrice: 150,
      Quantity: 30,
      totalPrice: 4500,
    },
    {
      id: 3,
      product: "Metal Shelf",
      unitPrice: 275,
      Quantity: 12,
      totalPrice: 3300,
    },
    {
      id: 4,
      product: "Glass Cup",
      unitPrice: 50,
      Quantity: 100,
      totalPrice: 5000,
    },
    {
      id: 5,
      product: "Leather Sofa",
      unitPrice: 1200,
      Quantity: 3,
      totalPrice: 3600,
    },
    {
      id: 6,
      product: "Cotton Pillow",
      unitPrice: 20,
      Quantity: 150,
      totalPrice: 3000,
    },
    {
      id: 7,
      product: "Ceramic Plate",
      unitPrice: 30,
      Quantity: 80,
      totalPrice: 2400,
    },
    {
      id: 8,
      product: "Steel Pan",
      unitPrice: 400,
      Quantity: 10,
      totalPrice: 4000,
    },
    {
      id: 9,
      product: "Wool Blanket",
      unitPrice: 85,
      Quantity: 45,
      totalPrice: 3825,
    },
  ];

  const products = useSelector((state) => state.cart.products);

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
                  <button className="deleteFromCart"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="totalBox">
          <div className="sss">
            <div>
              <button className="deleteFromCart"> Clear Cash</button>
            </div>

            <div className="finalTotal">
              <p>Total ({products.length} Items) :</p>
              <span>${getTotalPrice()}</span>
            </div>
          </div>
          <div className="cx">
            <button className="deleteFromCart "> CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};
