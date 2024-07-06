import React from "react";
import { Link, useParams } from "react-router-dom";

function DesktopBanner1() {
  return (
    <div>
      <Link to={`/collection/shop-by-concern`}>
        <div className="relative">
          <div className="relative h-screen">
            <img
              src="https://farmnaturelle.com/cdn/shop/files/Component_166_1_1_1.jpg?v=1713349229"
              alt="desktop-banner1"
              className="absolute h-full w-full object-cover z-[-10]"
            />
            <div className="p-20 w-1/2">
              <span className="text-black uppercase font-bold block mb-3">
                they most trusted ayurvedic & organic brand
              </span>
              <h2 className="text-6xl font-semibold mb-3">
                Say No to Health Issue, Yes to Life
              </h2>
              <div className="flex items-center gap-3">
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/Frame_30544.png?v=1695641721"
                  alt="rating stars"
                />
                <span>Over 3 lac + happy customer</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DesktopBanner1;
