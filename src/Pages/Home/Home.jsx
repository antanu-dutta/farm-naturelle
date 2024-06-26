import React from "react";
import "./Home.module.css";
import MobileBanner1 from "../../Components/Banner/Mobile Banner 1/MobileBanner1";
import BannerContainer from "../../Components/Banner/Banner Container/BannerContainer";
import IconStrip from "../../Components/Icon Strip/IconStrip";
import ShopCategory from "../../Components/Shop Category/ShopCategory";
import { concernData, cocernlogoUrl } from "../../Data Asset/ShopCategory";
import { productsData, productslogoUrl } from "../../Data Asset/ProductData";
import Ayurvedic from "../../Components/Ayurvedic/Ayurvedic";
import ProductCard from "../../Components/Product Card/ProductCard";

function Home() {
  return (
    <div className="pt-[150px]">
      <BannerContainer />
      <IconStrip />
      <ShopCategory
        data={concernData}
        logoUrl={cocernlogoUrl}
        title={"Shob By Concern"}
      />
      <Ayurvedic />
      <ShopCategory
        data={productsData}
        logoUrl={productslogoUrl}
        title={"Shob By Product"}
      />
      <ProductCard />
    </div>
  );
}

export default Home;
