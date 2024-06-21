import React from "react";
import styles from "./BannerContainer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MobileBanner1 from "../Mobile Banner 1/MobileBanner1";
import MobileBanner2 from "../Mobile Banner 2/MobileBanner2";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import DesktopBanner1 from "../Desktop Banner 1/DesktopBanner1";
import DesktopBanner2 from "../Desktop Banner 2/DesktopBanner2";
import DesktopBanner3 from "../Desktop Banner 3/DesktopBanner3";
import DesktopBanner4 from "../Desktop Banner 4/DesktopBanner4";

function BannerContainer() {
  return (
    <div>
      <div className={`${styles["mobile-banner"]}`}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          <SwiperSlide>
            <MobileBanner1 />
          </SwiperSlide>
          <SwiperSlide>
            <MobileBanner2 />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${styles["desktop-banner"]}`}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          // autoplay={{ delay: 10000 }}
          loop={true}
        >
          <SwiperSlide>
            <DesktopBanner1 />
          </SwiperSlide>
          <SwiperSlide>
            <DesktopBanner2 />
          </SwiperSlide>
          <SwiperSlide>
            <DesktopBanner3 />
          </SwiperSlide>
          <SwiperSlide>
            <DesktopBanner4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default BannerContainer;
