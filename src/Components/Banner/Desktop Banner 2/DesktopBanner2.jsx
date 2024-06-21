import React from "react";
import styles from "./DesktopBanner2.module.css";

function DesktopBanner2() {
  return (
    <div>
      <div className={`${styles["desktop-banner2"]}`}>
        <div className={`${styles["desktop-banner2-container"]}`}>
          <img
            src="https://farmnaturelle.com/cdn/shop/files/FN_22.jpg?v=1703157867"
            alt="desktop banner 2 image"
          />
          <div className="container">
            <div className={`${styles["desktop-banner2-content-container"]}`}>
              <div className={`${styles["desktop-banner2-content"]}`}>
                <span>healthy living starts with healthy eating</span>
                <h2>
                  From Farm To <span>Your Table</span>
                </h2>
                <div className={`${styles["desktop-banner2-rating"]}`}>
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Frame_30544.png?v=1695641721"
                    alt="rating stars"
                  />
                  <span>Over 50 lac+ product sold</span>
                </div>
                <button>EXPLORE OUR PRODUCT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopBanner2;
