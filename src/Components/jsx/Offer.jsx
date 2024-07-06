import React from "react";
import { PiCopySimpleDuotone } from "react-icons/pi";

function Offer() {
  return (
    <div>
      <div className="bg-primary">
        <div className="container">
          <div className="py-3 px-0 text-white text-[9px] sm:text-sm md:text-base flex items-center justify-center font-semibold gap-1 sm:gap-4">
            <span>
              Get an extra 5% discount on orders over ₹1000, up to ₹100 - Use
              coupon
            </span>
            <PiCopySimpleDuotone className="sm:text-lg md:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
