import React from "react";
import styles from "../css/StayAtFarmHouse.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function StayAtFarmHouse() {
  const gridItem = [
    "Dining Room with Tv & Fridge",
    "Lounge",
    "Extra Bed @ ₹1000",
    "Food @ Extra Cost",
  ];
  const slideImage = [
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_303_306c8769-6197-4d7b-97a3-72a1f792b26c.jpg?v=1698756606",
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_9785.jpg?v=1703665423",
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_9788.jpg?v=1703665423",
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_9789.jpg?v=1703665423",
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_9787.jpg?v=1703665423",
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_9786.jpg?v=1703665423",
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_9783.jpg?v=1703665423",
    "https://farmnaturelle.com/cdn/shop/files/Rectangle_9784.jpg?v=1703665423",
  ];
  return (
    <div className="py-16">
      <div className="container">
        <div
          className={`rounded-xl  bg-white p-4 flex flex-col lg:flex-row gap-6 border ${styles["custom-shadow"]} `}
        >
          <div className="w-full lg:w-1/2">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              className="h-full"
            >
              {slideImage.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-gray-800 tracking-wider text-sm font-semibold mb-2 block">
              OUR STAY AT RAMNAGAR
            </span>
            <h2 className="text-3xl lg:text-4xl text-black font-semibold mb-3">
              Stay at <span className="text-primary">Farm House</span>{" "}
            </h2>
            <p className="text-sm text-gray-600 font-medium leading-5 mb-4">
              Serene escape blending modern comfort with nature's bounty.
              Embrace tranquility, experience sustainable farming, and
              rejuvenate.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {gridItem.map((item, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Frame_1.svg?v=1697717852"
                    alt=""
                  />
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded border border-black px-2 md:px-4 py-6 flex justify-between text-sm md:text-base items-center mb-4">
              <span>Room 1 (1 King Size Bed)</span>
              <p>
                <span>&#8377; 3500</span> Per Night
              </p>
            </div>
            <div className="rounded border border-black px-4 text-sm md:text-base gap-3 py-6 flex justify-between items-center">
              <span>Room 2 (2 King Size Beds)</span>
              <p>
                <span>&#8377; 5500</span> Per Night
              </p>
            </div>
            <button className="py-3 px-6 bg-primary rounded mt-7 text-white font-semibold">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayAtFarmHouse;
