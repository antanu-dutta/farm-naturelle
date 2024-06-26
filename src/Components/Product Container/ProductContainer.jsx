import React, { useEffect, useRef } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../Product Card/ProductCard";

function ProductContainer() {
  const next = useRef(null);
  const prev = useRef(null);
  return (
    <div className="">
      <div className="flex items-center justify-between flex-col lg:flex-row lg:py-20 py-10">
        <div className="w-full lg:w-[30%] text-center lg:text-left flex flex-col gap-10 p-3 lg:p-24">
          <h2 className="text-[#855245] text-4xl font-medium">Pure Honey</h2>
          <span className="text-black text-sm lg:w-[70%]">
            Bee-produced, unprocessed honey from a farm, pure and natural.
          </span>
          <div className="flex gap-6 justify-center lg:justify-start">
            <div
              className="w-10 h-10 rounded-full  flex justify-center items-center text-[#6F4E37] border border-[#6F4E37] cursor-pointer hover:bg-[#6F4E37] hover:text-white transition-all"
              ref={prev}
            >
              <FaLongArrowAltLeft />
            </div>
            <div
              className="w-10 h-10 rounded-full  flex justify-center items-center text-[#6F4E37] border border-[#6F4E37] cursor-pointer hover:bg-[#6F4E37] hover:text-white transition-all"
              ref={next}
            >
              <FaLongArrowAltRight />
            </div>
          </div>
          <button className="py-3 px-16 border border-[#855245] bg-[#855245] rounded-xl text-white text-sm font-bold">
            VIEW ALL
          </button>
        </div>
        <div className="w-full lg:w-[70%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={{ prevEl: prev, nextEl: next }}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default ProductContainer;
