import React from "react";
import styles from "../css/SoilToSoul.module.css";
import { FaPlay } from "react-icons/fa";

function SoilToSoul() {
  return (
    <div className={`${styles["soil-to-soul"]}`}>
      <div className="container">
        <div className="flex flex-col-reverse laptop:flex-row gap-20">
          <div className=" flex-1">
            <h2 className="text-3xl font-semibold text-white leading-relaxed mb-4">
              <span className="text-[#cbd82d]">From Soil to Soul: </span> Where
              Nature Thrives, Health Flourishes
            </h2>
            <button className="secondary-btn">HAVE A LOOK AT OUR FARMS</button>
          </div>
          <div className="flex-1 flex items-center text-white  justify-center flex-col gap-5">
            <div className="text-5xl">
              <FaPlay />
            </div>
            <p className="text-3xl">Watch The Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoilToSoul;
