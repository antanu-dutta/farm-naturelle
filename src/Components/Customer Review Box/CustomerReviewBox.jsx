import React from "react";
import { FaRegStar } from "react-icons/fa";

function CustomerReviewBox() {
  return (
    <div className="py-7 px-4 bg-white shadow-2xl">
      <div className="flex gap-4 items-center mb-4">
        <img
          src="https://farmnaturelle.com/cdn/shop/files/review2_a046a2da-b0d8-4f5b-8f6e-de3bed4517eb_200x200.png?v=1697806030"
          alt=""
        />
        <span className="font-medium text-xl">Dr Sangeeta mathur</span>
      </div>
      <hr className="h-[1px] border border-gray-700 mb-4" />
      <div className="flex gap-2 mb-7">
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
      <p className="text-black font-medium text-lg">
        "Farm Natural equals trust. 4 years of satisfaction as a loyal customer.
        Exceptional customer service and genuine products. Kudos for maintaining
        quality in today's adulteration era!"
      </p>
    </div>
  );
}

export default CustomerReviewBox;
