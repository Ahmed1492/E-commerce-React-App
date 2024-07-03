import { useParams } from "react-router-dom";
import "./SingleCategory.scss";
import axios from "axios";
import { useEffect } from "react";
import { TitleOfCategories } from "../titleOfCategories/TitleOfCategories";

export const SingleCategory = ({ url }) => {
  const param = useParams();
  let categoryNameURL = param.name;
  let categoryName = param.name;

  let formattedCategory = categoryName.replace(/-/g, " ");

  formattedCategory = formattedCategory.replace(/\b\w/g, (match) =>
    match.toUpperCase()
  );
  console.log(formattedCategory); // Outputs: "Home Decoration"

  const getCategroy = async () => {
    try {
      let myResponse = await axios.get(url + categoryNameURL);
      console.log(myResponse.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategroy();
  }, []);
  return (
    <div>
      <TitleOfCategories title={`SEE OUR ${formattedCategory}`} />
    </div>
  );
};
