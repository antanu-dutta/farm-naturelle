import React from "react";
import CustomerReviewBox from "../Customer Review Box/CustomerReviewBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CustomerReview() {
  return (
    <div>
      <div className="bg-[#f6f5f0]">
        <div className="container">
          <div className="flex items-center flex-col py-10">
            <h2 className="text-black text-5xl tracking-widest mb-7 text-center">
              Happy Customers
            </h2>
            <p className="text-black text-xl font-medium text-center leading-snug tracking-wide mb-7">
              With million of products delivered, discover why customers trust{" "}
              <br />
              us with there daily health
            </p>
            <div className="w-full p-7">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                breakpoints={{
                  768: {
                    slidesPerView: "2",
                  },
                  1024: {
                    slidesPerView: "3",
                  },
                }}
              >
                <SwiperSlide>
                  <CustomerReviewBox />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomerReviewBox />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomerReviewBox />
                </SwiperSlide>
                <SwiperSlide>
                  <CustomerReviewBox />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
