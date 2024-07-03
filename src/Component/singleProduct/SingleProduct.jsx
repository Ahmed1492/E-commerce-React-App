import axios from "axios";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const SingleProduct = ({ url }) => {
  const param = useParams();
  const id = param.id;
  const getSingleProduct = async () => {
    try {
      let myRespone = await axios.get(url + id);
      console.log(myRespone.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  });
  return <div>SingleProduct</div>;
};
