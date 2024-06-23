import React from "react";
import styles from "./ShopCategoryItem.module.css";

function ShopCategoryItem(props) {
  const { url, text } = props;
  return (
    <div>
      <div className={`${styles["shop-category-item"]}`}>
        <img src={url} alt="" />
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ShopCategoryItem;
