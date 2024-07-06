import React from "react";
import { Link } from "react-router-dom";

function Grettings() {
  return (
    <div>
      <div className="bg-primary">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 py-10 px-5">
            <div className="lg:flex-1">
              <span className="text-[#bac34e] text-base block mb-2">
                WELCOME TO FARM NATURELLE
              </span>
              <h2 className="text-4xl text-white mb-5">
                Here Nature's Purest Treasures are nurtured and harvested for
                your well-being.
              </h2>
              <img
                src="https://farmnaturelle.com/cdn/shop/files/ABOUT_2_280x.jpg?v=1703232158"
                alt=""
                className="w-full"
              />
            </div>
            <div className="lg:flex-1">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Rectangle_9245_280x.jpg?v=1703160482"
                alt=""
                className="w-full mb-5 lg:block hidden"
              />
              <p className="text-sm text-white leading-6 tracking-wide mb-10">
                At Farm Naturelle, we believe that the path to true wellness
                begins with embracing the gifts of nature. Through our organic
                farming methods and sustainable approach, we deliver a diverse
                range of products that are not only good for you but also good
                for the planet. Join us as we cultivate a healthier future, one
                harvest at a time, and savor the authentic flavors of Farm
                Naturelle that nourish both body and soul.
              </p>
              <div>
                <Link to="/about-us">
                  <button className="text-white font-bold border w-full lg:w-fit rounded py-2 px-6 lg:me-4 mb-4 lg:mb-0">
                    KNOW MORE
                  </button>
                </Link>

                <button className="py-2 px-6 text-primary w-full lg:w-fit bg-white rounded font-bold ">
                  BOOK A FARM VISIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grettings;
