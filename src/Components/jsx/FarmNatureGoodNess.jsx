import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

function FarmNatureGoodNess() {
  const imageUrl = [
    "https://farmnaturelle.com/cdn/shop/files/projects-v1-img2_jpg_f8290060-c5ff-4637-a6b9-2369012e3e13.jpg?v=1698823190",
    "https://farmnaturelle.com/cdn/shop/files/projects-v1-img3_jpg_357811c0-6d02-425c-9c91-5e587a783a4e.jpg?v=1698823235",
    "https://farmnaturelle.com/cdn/shop/files/projects-v1-img4_jpg_0abaee93-30e2-422f-89bd-2ff78443bdcb.jpg?v=1698823263",
    "https://farmnaturelle.com/cdn/shop/files/projects-v1-img1_jpg_1003450c-4cb6-4c6f-af0a-1fa77f0c036e.jpg?v=1698823283",
    "https://farmnaturelle.com/cdn/shop/files/projects-v1-img3_jpg_357811c0-6d02-425c-9c91-5e587a783a4e.jpg?v=1698823235",
    "https://farmnaturelle.com/cdn/shop/files/16b2ef4a-579b-4e46-a045-eb66cbe1fee2_conv.png?v=1698827617",
    "https://farmnaturelle.com/cdn/shop/files/538ff8a6-bd23-4e4c-b444-044cf24f91e0_conv.png?v=1698827617",
    "https://farmnaturelle.com/cdn/shop/files/0af52814-eab1-4b18-9f9a-f834f6fae4fe_conv.png?v=1698827617",
  ];
  return (
    <div className="bg-primary ">
      <div className="container">
        <div className="py-10">
          <h2 className="text-xl lg:text-3xl text-white font-semibold text-center leading-snug mb-8">
            We’ve have over 400 Honey Collection workers to collect jungle honey
            and <br />{" "}
            <span className="text-[#cbd82d]">
              15000 Honey boxes to bring Nature Goodness to you
            </span>
          </h2>
          <div className="w-full ">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {imageUrl.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt="" className="w-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center items-center pt-6">
            <button className="rounded text-white border border-white uppercase py-3 px-7">
              BOOK A VISIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmNatureGoodNess;
