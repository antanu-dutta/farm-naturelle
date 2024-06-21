import React from "react";
import styles from "./DesktopBanner3.module.css";

function DesktopBanner3() {
  return (
    <div>
      <div className={`${styles["desktop-banner3"]}`}>
        <div className={`${styles["desktop-banner3-container"]}`}>
          <img
            src="https://farmnaturelle.com/cdn/shop/files/FN33_1.jpg?v=1713349252"
            alt="desktop banner image"
          />
          <div className="container">
            <div className={`${styles["desktop-banner3-content-container"]}`}>
              <div className={`${styles["desktop-banner3-content"]}`}>
                <span>healthy living starts with healthy eating</span>
                <h2>
                  Go Organic With <span>20 + Acre Of Farm</span>
                </h2>
                <div className={`${styles["desktop-banner3-rating"]}`}>
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

export default DesktopBanner3;
