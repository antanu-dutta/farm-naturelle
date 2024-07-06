import React, { useEffect, useState } from "react";
// import styles from "./Navbar.module.css";

import DesktopNav from "../Header/Navbar/DesktopNav/DesktopNav";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
    </div>
  );
}

export default Navbar;
