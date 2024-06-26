import React from "react";
import styles from "./ShopCategoryItem.module.css";

function ShopCategoryItem(props) {
  const { url, text, borderDesign } = props;
  return (
    <div>
      <div className={`${styles["shop-category-item"]} cursor-pointer`}>
        <img
          src={url}
          alt=""
          className={`${
            borderDesign === "Shob By Concern"
              ? "rounded-[100px]"
              : "rounded-[20px]"
          }`}
        />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ShopCategoryItem;
