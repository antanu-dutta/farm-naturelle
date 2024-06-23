import React from "react";
import styles from "./ShopCategory.module.css";
import ShopCategoryItem from "../Shop Category Item/ShopCategoryItem";

function ShopCategory({ data }) {
  return (
    <div>
      <div className={`${styles["shop-category"]}`}>
        <div className="container">
          <div className={`${styles["shop-category-container"]}`}>
            <div className={`${styles["shop-category-container-content"]}`}>
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Group_110799_3_1_1.png?v=1713349843"
                alt=""
              />
              <h2>Shop By Concern</h2>
              <div className={`${styles["shop-category-item-container"]}`}>
                {data.map((item) => (
                  <ShopCategoryItem
                    url={item.url}
                    text={item.text}
                    key={item.id}
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
