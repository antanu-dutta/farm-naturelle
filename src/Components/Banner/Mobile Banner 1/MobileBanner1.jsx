import React from "react";
import styles from "./MobileBanner.module.css";

function MobileBanner1() {
  return (
    <div>
      <div className={`${styles["mobile-banner1"]}`}>
        <div className={`${styles["mobile-banner1-container"]}`}>
          <img
            src="https://farmnaturelle.com/cdn/shop/files/Frame_14857629.webp?v=1716216009"
            alt="Banner 1 image"
          />
          <div className={`container`}>
            <div className={`${styles["banner1-content"]}`}>
              <span>THE MOST TRUSTED AYURVEDIC & ORGANIC BRAND</span>
              <h2>Say No to Health Issue, Yes to Life</h2>
              <div className={`${styles["banner1-rating"]}`}>
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/Group_14856903.svg?v=1698905393"
                  alt="rating-star"
                />
                <span>Over 50 lacs + product sold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBanner1;
