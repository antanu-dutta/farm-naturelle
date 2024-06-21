import React from "react";
import { PiCopySimpleDuotone } from "react-icons/pi";
import styles from "./Offer.module.css";

function Offer() {
  return (
    <div>
      <div className={`${styles.offer}`}>
        <div className={`container`}>
          <div className={`${styles["offer-content"]}`}>
            <span>
              Get an extra 5% discount on orders over ₹1000, up to ₹100 - Use
              coupon
            </span>
            <PiCopySimpleDuotone className={`${styles["copy-btn"]}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
