import React from "react";
import styles from "../css/WelcomeFarm.module.css";

function WelcomeFarm({ details }) {
  const {
    image,
    title,
    firstHeading,
    secondHeading,
    subHeading,
    text,
    listText,
  } = details;
  return (
    <div className="py-[80px]">
      <div className="container">
        <div
          className={`flex gap-10 flex-col-reverse laptop:flex-row ${
            title.includes("MISSION") && "flex-row-reverse"
          }`}
        >
          <div className="flex-1 hidden laptop:block">
            <img src={image} alt="" className="w-full" />
          </div>
          <div className="flex-1">
            <span className="text-sm tracking-widest text-gray-700 block mb-4 font-semibold">
              {title}
            </span>
            <h2 className="text-black text-3xl tablet:4xl font-semibold leading-snug mb-4">
              {firstHeading}
              <span className="text-primary">{secondHeading}</span>
            </h2>
            <p className="text-xl tablet:2xl text-primary mb-4">{subHeading}</p>
            <p className="text-normal leading-snug text-gray-800 mb-4">
              {text}
            </p>
            <img src={image} alt="" className="w-full mb-6 laptop:hidden" />
            <ul
              className={`${styles["unordered-list"]} flex gap-3 flex-col mb-10`}
            >
              {listText.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="primary-btn">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeFarm;
