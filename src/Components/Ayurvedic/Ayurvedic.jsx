import React from "react";
import styles from "./Ayurvedic.module.css";
import { Link } from "react-router-dom";
function Ayurvedic() {
  return (
    <div>
      <div className={`${styles["ayurvedic"]}`}>
        <div className="container">
          <div className={`${styles["ayurvedic-container"]}`}>
            <div className={`${styles["ayurvedic-content"]}`}>
              <h2>Not Sure What to Buy?</h2>
              <p>Consult our Experts and make your Daily Life Healthy</p>
              <ul>
                <li>
                  <img
                    src="//farmnaturelle.com/cdn/shop/files/Group.svg?v=1696442650"
                    alt=""
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  Ayurvedic Products
                </li>
                <li>
                  <img
                    src="//farmnaturelle.com/cdn/shop/files/Group_1.svg?v=1696443200"
                    alt=""
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  Lifestyle Recommendation
                </li>
                <li>
                  <img
                    src="//farmnaturelle.com/cdn/shop/files/Group_2.svg?v=1696443200"
                    alt=""
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  Custom Diet Plan
                </li>
                <li>
                  <img
                    src="//farmnaturelle.com/cdn/shop/files/Group_3.svg?v=1696443198"
                    alt=""
                    loading="lazy"
                    width="auto"
                    height="auto"
                  />
                  Doctor’s Advice
                </li>
              </ul>
              <Link to="">BOOK Consultation @ RS 99</Link>
            </div>
            <div classNamw={`${styles["ayurvedic-img"]}`}>
              <picture>
                <source
                  media="(min-width:767px)"
                  srcset="//farmnaturelle.com/cdn/shop/files/desk.png?v=1698732439"
                  loading="lazy"
                  width="100%"
                  height="auto"
                />
                <img
                  src="//farmnaturelle.com/cdn/shop/files/mobile.png?v=1698732234"
                  alt=""
                  loading="lazy"
                  width="100%"
                  height="auto"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ayurvedic;
