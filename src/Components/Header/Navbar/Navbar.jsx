import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

function Navbar() {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
    </div>
  );
}

export default Navbar;
