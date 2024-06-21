import React from "react";
import styles from "./IconStrip.module.css";

function IconStrip() {
  const iconStripDetails = [
    {
      url: "https://farmnaturelle.com/cdn/shop/files/shipping_2.svg?v=1697091307",
      text: "FREE SHIPPING AND RETURN",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/arrow_2.svg?v=1697091308",
      text: "ORGANIC & NATURAL",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/checkout_1.png?v=1696393337",
      text: "SECURED CHECKOUT",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/warranty_2b1834c6-971c-43f3-b4e0-94b74c220a97.svg?v=1697091308",
      text: "10 YEAR LEGACY",
    },
  ];
  return (
    <div>
      <div className={`${styles["iconstrip-main-container"]}`}>
        <div className="container">
          <div className={`${styles["iconstrip-container"]}`}>
            {iconStripDetails.map((item, index) => (
              <div className={`${styles["iconstrip"]}`}>
                <img src={item.url} alt="" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconStrip;
