import React from "react";
import { Link } from "react-router-dom";

function FarmHeader() {
  return (
    <div className="pt-[130px] pb-[80px]">
      <div className="relative">
        <img
          src="https://farmnaturelle.com/cdn/shop/files/Group_14856861.png?v=1697702303"
          alt=""
          className="w-full object-cover hidden lg:block"
        />
        <img
          src="https://farmnaturelle.com/cdn/shop/files/Group_14856880_2_c5eee7e4-ca30-404a-99d0-ecbdadf0df41.png?v=1698342106"
          alt=""
          className="lg:hidden w-full object-cover"
        />
        <div className="absolute top-0 flex justify-center text-white items-center flex-col w-full h-full">
          <h2 className=" text-7xl mb-4">Our Farm</h2>
          <span className="font-bold">
            <Link to="/">Home</Link> / Our Farm
          </span>
        </div>
      </div>
    </div>
  );
}

export default FarmHeader;
