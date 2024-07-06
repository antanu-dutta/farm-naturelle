import React, { useEffect } from "react";
import AboutUsHeader from "../../Components/jsx/AboutUsHeader";
import WelcomeFarm from "../../Components/jsx/WelcomeFarm";
import AboutTimeLine from "../../Components/jsx/AboutTimeLine";
import AboutusFounderText from "../../Components/jsx/AboutusFounderText";
import AboutusFounder from "../../Components/jsx/AboutUsFounder";
import SoilToSoul from "../../Components/jsx/SoilToSoul";

function Aboutus() {
  useEffect(() => {
    document.title = "About us - Farm Naturelle";
    return () => (document.title = "About us - Farm Naturelle");
  }, []);
  const welcome = {
    image:
      "https://farmnaturelle.com/cdn/shop/files/about-v1-img1.jpg_1.jpg?v=1697444603",
    title: "WELCOME TO FARM NATURELLE",
    firstHeading: "Nourish Your Body ",
    secondHeading: "with Nature’s Goodness",
    subHeading: "We Are Your Source for Organic Wellness",
    text: "Discover a journey of well-being with Farm Naturelle. We're passionate about providing you with natural, organic products that nurture your health and the environment. With over 30 years of experience, we stand as a trusted brand, committed to ethical practices and the health of our customers.",
    listText: [
      "Farm-Fresh Quality",
      "Embracing Organic Practices",
      "Sustainable Living",
    ],
  };

  const philosophy = {
    image:
      "https://farmnaturelle.com/cdn/shop/files/Rectangle_9320.jpg?v=1697624769",
    title: "OUR PHILOSOPHY",
    firstHeading: "Cultivating Nature's ",
    secondHeading: "Wisdom",
    subHeading: "Happy Planet, Healthy You",
    text: "Our journey begins with a deep understanding that our well-being is deeply connected to the health of our planet. That's why we're committed to sustainable practices. It's not just about making great products; it's about leaving a positive mark on the environment. We believe in giving back as much as we take.",
    listText: [
      "Traditional Wisdom, Modern Approach",
      "Embracing Organic Practices",
      "Authenticity and Ethics",
    ],
  };

  const mission = {
    image:
      "https://farmnaturelle.com/cdn/shop/files/Rectangle_9321.jpg?v=1697629386",
    title: "OUR MISSION",
    firstHeading: "Nurturing Health,",
    secondHeading: "Embracing Sustainability",
    subHeading: "We’re are on Mission for Healthier India.",
    text: "Our mission at Farm Naturelle is to contribute towards a healthier world. We believe that the path to wellness begins with the choices we make. By providing natural, organic products and promoting sustainable practices, we aim to play a part in building a healthier, more vibrant planet for generations to come.",
    listText: ["Cultivating Wellness", "Embracing Organic Practices"],
  };

  return (
    <div>
      <AboutUsHeader />
      <WelcomeFarm details={welcome} />
      <AboutTimeLine />
      <AboutusFounderText />
      <AboutusFounder />
      <WelcomeFarm details={philosophy} />
      <SoilToSoul />
      <WelcomeFarm details={mission} />
    </div>
  );
}

export default Aboutus;
