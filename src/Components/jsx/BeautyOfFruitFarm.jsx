import React from "react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function BeautyOfFruitFarm() {
  const imageUrl = [
    "https://farmnaturelle.com/cdn/shop/files/0F3DDC2B-5D4D-4134-AEB6-AA5F06011C3A_conv.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/1DA3AAA9-F33F-4DC7-BAEB-1485BFC8FCAF_conv.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/IMG_3790.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/IMG_3781.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/IMG_3794.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/176C227E-5116-4DAA-8355-E1507727461D_conv.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/A9D7F331-4A1B-4D5B-BF7C-E6EB56C95069_conv.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/IMG_3792.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/477A33FD-C13C-46FE-AFAD-EAB82017D096_conv.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/C1FC6215-2CF4-49E8-9DBF-A787F3918A7B_conv.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/IMG_3780.png?v=1698828010",
    "https://farmnaturelle.com/cdn/shop/files/591B16B5-10FA-4D11-B0B1-EC2753C85077_conv.png?v=1698828010",
  ];
  return (
    <div className="py-[80px]">
      <div className="container">
        <div>
          <h2 className="text-3xl text-primary font-semibold text-center mb-5">
            Beauty of Fruit Farm
          </h2>
          <div className="w-full">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
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
        </div>
      </div>
    </div>
  );
}

export default BeautyOfFruitFarm;
