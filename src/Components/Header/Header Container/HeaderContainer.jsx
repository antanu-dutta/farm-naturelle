import React, { useEffect, useState } from "react";
import styles from "./HeaderContainer.module.css";
import Offer from "../Offer/Offer";
import Navbar from "../Navbar/Navbar";

function HeaderContainer() {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles["fixed-nav"]} ${fixed ? "shadow-xl" : ""}`}>
      <Offer />
      <Navbar />
    </div>
  );
}

export default HeaderContainer;
