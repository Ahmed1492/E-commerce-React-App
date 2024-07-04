import { Link } from "react-router-dom";
import "./LeftMenue.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";
export const LeftMenue = ({ setIsOpenedMenue, isOpenedMenue }) => {
  const [allCategories, setAllCategories] = useState([]);
  const getAllCategories = async () => {
    try {
      let myResponse = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      setAllCategories(myResponse.data);
      // console.log(myResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className={`leftMenue ${isOpenedMenue ? "" : "hideMenue"}`}>
      <div className="allCategories">
        <div className="headerLeftMenue">
          <h4>ALL CATEGORIES</h4>
          <div className="closeIcone">
            <button onClick={() => setIsOpenedMenue(false)}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="categoryLinks">
          <ul>
            {allCategories.map((categoryItem, index) => {
              let categoryName = categoryItem
                .replace("-", " ")
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              return (
                <li key={index}>
                  <Link to={`category/${categoryItem}`}>{categoryName}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
