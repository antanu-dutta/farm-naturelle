import React from "react";
import styles from "./MobileBanner.module.css";

function MobileBanner2() {
  return (
    <div>
      <div className={`${styles["mobile-banner2"]}`}>
        <div className={`${styles["mobile-banner2-container"]}`}>
          <img
            src="https://farmnaturelle.com/cdn/shop/files/Component_143_1.jpg?v=1716216088"
            alt="Mobile Banner 2 image"
          />
          <div className="container">
            <div className={`${styles["mobile-banner2-content"]}`}>
              <span>HEALTHY LIVING STARTS WITH HEALTHY EATING</span>
              <h2>From Farm To Your Table</h2>
              <div className={`${styles["mobile-banner2-rating"]}`}>
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/Group_14856903.svg?v=1698905393"
                  alt="rating-star"
                />
                <span>Over 50 lacs + product sold</span>
              </div>
              <button className={`${styles["mobile-banner2-btn"]}`}>
                EXPLORE OUR PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBanner2;
