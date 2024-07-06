import React from "react";
import { Link } from "react-router-dom";

function AboutUsHeader() {
  return (
    <div className="pt-[140px] pb-[40px]">
      <div className="relative">
        <img
          src="https://farmnaturelle.com/cdn/shop/files/Group_14856858.jpg?v=1697442418"
          alt=""
          className="w-full object-cover hidden laptop:block"
        />
        <img
          src="https://farmnaturelle.com/cdn/shop/files/Group_14856859.png?v=1697442469"
          alt=""
          className="w-full object-cover laptop:hidden"
        />
        <div className="absolute top-0 w-full text-white h-full flex justify-center flex-col items-center">
          <h2 className=" text-4xl tablet:text-5xl laptop:text-6xl mb-4">
            About Us
          </h2>
          <span className="font-semibold">
            <Link to="/">Home</Link> / About Us
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeader;
