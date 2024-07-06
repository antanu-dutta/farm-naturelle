import React from "react";
import styles from "./DesktopBanner3.module.css";
import { Link } from "react-router-dom";

function DesktopBanner3() {
  return (
    <div>
      <div className="relative">
        <div className="relative h-screen">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/FN33_1.jpg?v=1713349252"
            alt="desktop banner image"
            className="absolute h-full w-full z-[-10] object-cover"
          />
          <div className="container">
            <div className="flex justify-center">
              <div className="w-[70%] flex flex-col items-center py-20 px-0">
                <span className="text-white block mb-4 text-lg font-bold uppercase">
                  healthy living starts with healthy eating
                </span>
                <h2 className="text-white text-5xl mb-7">
                  Go Organic With{" "}
                  <span className="text-[#cbd82d]">20 + Acre Of Farm</span>
                </h2>
                <div className="flex items-center gap-4 text-white mb-6">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Frame_30544.png?v=1695641721"
                    alt="rating stars"
                  />
                  <span>Over 50 lac+ product sold</span>
                </div>
                <Link to="/our-farm">
                  <button className="border border-white text-white hover:bg-primary hover:border-primary font-semibold py-3 px-6 rounded-xl transition-all">
                    Visit Our Farm
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopBanner3;
