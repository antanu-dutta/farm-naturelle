import React from "react";
import styles from "./ShopCategory.module.css";
import ShopCategoryItem from "../Shop Category Item/ShopCategoryItem";
import { useProductContext } from "../../Context/ProductContext";

function ShopCategory({ data, logoUrl, title }) {
  return (
    <div>
      <div className={`${styles["shop-category"]}`}>
        <div className="container">
          <div className={`${styles["shop-category-container"]}`}>
            <div className={`${styles["shop-category-container-content"]}`}>
              <img src={logoUrl} alt="" />
              <h2>{title}</h2>
              <div className={`${styles["shop-category-item-container"]}`}>
                {data.map((item) => (
                  <ShopCategoryItem
                    url={item.url}
                    text={item.text}
                    key={item.id}
                    borderDesign={title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
