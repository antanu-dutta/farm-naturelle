import React from "react";
import styles from "./DesktopBanner4.module.css";

function DesktopBanner4() {
  return (
    <div>
      <div className={`${styles["desktop-banner4"]}`}>
        <div className={`${styles["desktop-banner4-container"]}`}>
          <img
            src="https://farmnaturelle.com/cdn/shop/files/FN44_1.jpg?v=1713348888"
            alt="desktop banner 4 image"
          />
          <div className="container">
            <div className={`${styles["desktop-banner4-content"]}`}>
              <span>the most trusted ayurvedic</span>
              <h2>
                <span>Don't Delay</span> Your <br /> Health Concern !
              </h2>
              <span>consult with our achryas (doctor) and get</span>
              <div
                className={`${styles["desktop-banner4-content-things-container"]}`}
              >
                <div className={`${styles["desktop-banner4-content-thing"]}`}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_10.svg?v=1698902843"
                    alt=""
                  />
                  <span>Ayurvedic Product </span>
                </div>
                <div className={`${styles["desktop-banner4-content-thing"]}`}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_16.svg?v=1698902843"
                    alt=""
                  />
                  <span>Lifestyle recomendation</span>
                </div>
                <div className={`${styles["desktop-banner4-content-thing"]}`}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_17.svg?v=1698902842"
                    alt=""
                  />
                  <span>Custom Diet Plan</span>
                </div>
                <div className={`${styles["desktop-banner4-content-thing"]}`}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_18.svg?v=1698902843"
                    alt=""
                  />
                  <span>Expert Connect</span>
                </div>
              </div>
              <button>book consultation @ 99</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopBanner4;
