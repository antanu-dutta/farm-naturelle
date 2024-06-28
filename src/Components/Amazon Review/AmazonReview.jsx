import React from "react";
import styles from "./AmazonReview.module.css";

function AmazonReview() {
  return (
    <div>
      <div className={`${styles["amazon-review"]} py-10 `}>
        <div className="container">
          <div className="flex flex-col justify-center items-center md:py-24">
            <h2 className="text-primary text-3xl md:text-5xl font-bold mb-6 text-center">
              Over 30,000 reviews <br /> on Amazon
            </h2>
            <p className="text-lg md:text-xl text-primary text-center md:hidden mb-4">
              We’ve received a lot of love and are thrilled to share some of the
              experiences of our happy customers.
            </p>
            <p className="text-lg md:text-xl text-primary text-center mb-4 md:block hidden">
              We’ve received a lot of love and are thrilled to <br /> share some
              of the experiences of our happy <br /> customers.
            </p>
          </div>
        </div>
        <img
          src="https://farmnaturelle.com/cdn/shop/files/Frame_14857573.png?v=1697165399"
          alt=""
          className="block md:hidden"
        />
      </div>
    </div>
  );
}

export default AmazonReview;
