import React from "react";
import styles from "./DesktopBanner1.module.css";

function DesktopBanner1() {
  return (
    <div>
      <div className={`${styles["dekstop-banner1"]}`}>
        <div className={`${styles["desktop-banner1-container"]}`}>
          <img
            src="https://farmnaturelle.com/cdn/shop/files/Component_166_1_1_1.jpg?v=1713349229"
            alt="desktop-banner1"
          />
          <div className="container">
            <div className={`${styles["desktop-banner1-content"]}`}>
              <span>they most trusted ayurvedic & organic brand</span>
              <h2>Say No to Health Issue, Yes to Life</h2>
              <div className={`${styles["desktop-banner1-rating"]}`}>
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/Frame_30544.png?v=1695641721"
                  alt="rating stars"
                />
                <span>Over 3 lac + happy customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopBanner1;
