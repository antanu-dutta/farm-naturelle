import React from "react";
import "./Home.module.css";
import MobileBanner1 from "../../Components/Banner/Mobile Banner 1/MobileBanner1";
import BannerContainer from "../../Components/Banner/Banner Container/BannerContainer";
import IconStrip from "../../Components/Icon Strip/IconStrip";

function Home() {
  return (
    <div>
      <BannerContainer />
      <IconStrip />
    </div>
  );
}

export default Home;
