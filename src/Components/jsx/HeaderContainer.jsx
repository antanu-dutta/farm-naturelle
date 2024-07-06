import React, { useEffect, useState } from "react";
import Offer from "./Offer";
import Navbar from "./Navbar";

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
    <div
      className={`fixed top-0 left-0 z-[100000] w-full bg-white ${
        fixed ? "shadow-xl" : ""
      }`}
    >
      <Offer />
      <Navbar />
    </div>
  );
}

export default HeaderContainer;
