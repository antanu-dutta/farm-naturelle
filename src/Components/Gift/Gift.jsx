import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GiftBox from "../Gift Box/GiftBox";

function Gift() {
  const giftContent = [
    {
      imageUrl:
        "https://farmnaturelle.com/cdn/shop/files/Frame_14857384.png?v=1696467233",
      title: "Chocolate Tulip Box",
      description: "2 Bottles of Honey (400g each) with Dipper",
      price: "949",
    },
    {
      imageUrl:
        "https://farmnaturelle.com/cdn/shop/files/Frame_14857385.png?v=1696467232",
      title: "Red Tulip Box",
      description: "3 Bottles of Honey (400g each) with Dipper",
      price: "1130",
    },
    {
      imageUrl:
        "https://farmnaturelle.com/cdn/shop/files/Group_14856905-png.png?v=1698909761",
      title: "Gift The Finest Honeys",
      description: "10 Bottles of Honey (40g each)",
      price: "600",
    },
    {
      imageUrl:
        "https://farmnaturelle.com/cdn/shop/files/Group_14856904_bb3f9c95-2369-4228-a85b-522a148cf7f8.png?v=1698912009",
      title: "Gift The Finest Honeys",
      description: "9 Bottles of Honey (55g each)",
      price: "695",
    },
  ];
  return (
    <div>
      <div className="gift py-7">
        <div className="container">
          <div className="gift-container flex flex-col items-center">
            <h2 className="text-black text-xl md:text-2xl text-center lg:text-4xl font-semibold mb-6">
              Gift Your Loved ones Healthy Living{" "}
              <span className="text-primary">starts @ Rs 499 only</span>
            </h2>
            <div className="w-full">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    navigation: true,
                    pagination: {
                      clickable: true,
                    },
                  },
                }}
              >
                {giftContent.map((item, index) => (
                  <SwiperSlide>
                    <GiftBox
                      title={item.title}
                      image={item.imageUrl}
                      description={item.description}
                      price={item.price}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button className="rounded-xl text-base text-primary border border-primary bg-white px-8 py-3 mt-10 font-semibold hover:text-white hover:bg-primary transition-all">
              SHOP THIS
            </button>
            {/* <p className="text-primary text-3xl font-semibold py-4 text-center">
              Customers love our product
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
