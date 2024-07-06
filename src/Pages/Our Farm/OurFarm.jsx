import React, { useEffect } from "react";
import FarmHeader from "../../Components/jsx/FarmHeader";
import AboutFarm from "../../Components/jsx/AboutFarm";
import FarmNatureGoodNess from "../../Components/jsx/FarmNatureGoodNess";
import CultivatingWellness from "../../Components/jsx/CultivatingWellness";
import StayAtFarmHouse from "../../Components/jsx/StayAtFarmHouse";
import BookFarm from "../../Components/jsx/BookFarm";
import BeautyOfFruitFarm from "../../Components/jsx/BeautyOfFruitFarm";

function OurFarm() {
  useEffect(() => {
    document.title = "Our Farm - Farm Naturelle";
  }, []);
  return (
    <div>
      <FarmHeader />
      <AboutFarm />
      <FarmNatureGoodNess />
      <CultivatingWellness />
      <StayAtFarmHouse />
      <BookFarm />
      <BeautyOfFruitFarm />
    </div>
  );
}

export default OurFarm;
