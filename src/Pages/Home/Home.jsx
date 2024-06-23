import React from "react";
import "./Home.module.css";
import MobileBanner1 from "../../Components/Banner/Mobile Banner 1/MobileBanner1";
import BannerContainer from "../../Components/Banner/Banner Container/BannerContainer";
import IconStrip from "../../Components/Icon Strip/IconStrip";
import ShopCategory from "../../Components/Shop Category/ShopCategory";
import { concernData } from "../../Data Asset/ShopCategory";
import Ayurvedic from "../../Components/Ayurvedic/Ayurvedic";

function Home() {
  return (
    <div className="pt-[150px]">
      <BannerContainer />
      <IconStrip />
      <ShopCategory data={concernData} />
      <Ayurvedic />
    </div>
  );
}

export default Home;
