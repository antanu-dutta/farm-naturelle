import React from "react";
import "./HeaderContainer.module.css";
import Offer from "../Offer/Offer";
import Navbar from "../Navbar/Navbar";

function HeaderContainer() {
  return (
    <div>
      <Offer />
      <Navbar />
    </div>
  );
}

export default HeaderContainer;
