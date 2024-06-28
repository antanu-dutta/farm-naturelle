import React from "react";
import "./Home.module.css";
import BannerContainer from "../../Components/Banner/Banner Container/BannerContainer";
import IconStrip from "../../Components/Icon Strip/IconStrip";
import ShopCategory from "../../Components/Shop Category/ShopCategory";
import { concernData, cocernlogoUrl } from "../../Data Asset/ShopCategory";
import { productsData, productslogoUrl } from "../../Data Asset/ProductData";
import Ayurvedic from "../../Components/Ayurvedic/Ayurvedic";
import { useSwiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import ProductContainer from "../../Components/Product Container/ProductContainer";
import AllData from "../../Data Asset/AllProduct";
import Benifits from "../../Components/Benifits/Benifits";
import Gift from "../../Components/Gift/Gift";
import Grettings from "../../Components/Grettings/Grettings";
import AmazonReview from "../../Components/Amazon Review/AmazonReview";

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
      <ProductContainer
        title="Pure Honey"
        subTitle="Bee-produced, unprocessed honey from a farm, pure and natural"
        product={AllData}
        category="Raw Honey"
      />
      <ProductContainer
        title="Cold Prossed Cooking Oils"
        subTitle="Cold-pressed, natural cooking oils sourced from farm ingredients for healthier cuisine."
        product={AllData}
        category="Cooking oil"
      />
      <ProductContainer
        title="Bilona A2 Ghee"
        subTitle="Pure, farm-sourced, made through traditional method."
        product={AllData}
        category="A2 Desi Cow Ghee"
      />
      <Benifits />
      <ProductContainer
        title="Herbal Juices"
        subTitle="Pure, Organic herbal juices sourced from farm ingredients has no added sugar."
        product={AllData}
        category="Herbal Juices"
      />
      <Gift />
      <Grettings />
      <AmazonReview />
    </div>
  );
}

export default Home;
