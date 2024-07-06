import React, { useEffect, useState } from "react";
import styles from "../css/MobileNav.module.css";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

function MobileNav() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [showMobileNavItem, setShowMobileNavItem] = useState("");
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
    if (openMobileNav || openCart) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove(styles["overflow-hidden"]);
  });
  return (
    <div>
      <div className="bg-[#f8f6f0] py-3 px-0 desktop:hidden">
        <div className="container">
          <div className="flex items-center justify-between mb-2">
            <div className="text-2xl sm:text-3xl">
              <FaBars onClick={() => setOpenMobileNav(true)} />
            </div>
            <Link to="/">
              <div>
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/Logo_1_1.png?v=1694410359"
                  alt="site-logo"
                  className="w-[70%] object-cover"
                />
              </div>
            </Link>
            <div className="flex items-center gap-2 text-2xl sm:text-3xl">
              <div>
                <PiShoppingCartSimpleLight onClick={() => setOpenCart(true)} />
              </div>
              <div>
                <Link to="/login">
                  <CiUser />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 bg-white py-3 px-1 rounded-xl">
              <IoSearch className="text-3xl" />
              <input
                type="text"
                placeholder="Search ..."
                className="outline-none border-none text-sm text-[#4f4d4d] w-full sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>

      {/* // ! Open Cart  */}

      <div
        className={`fixed top-0 rounded-[30px] bg-white h-screen w-full p-5 z-[10] transition-all xl:hidden ${
          openCart ? "right-0" : "right-[-100%]"
        }`}
      >
        <div className="flex items-center justify-between">
          <div></div>
          <h2 className="uppercase text-lg text-[#3f3f3f] font-bold">
            Shopping Cart
          </h2>
          <div className="text-2xl" onClick={() => setOpenCart(false)}>
            <FaXmark />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <img
            src="https://cdn.shopify.com/s/files/1/0362/6912/9860/t/6/assets/1659690328.png?v=1659690329"
            alt="cart-icon"
          />
          <span className="italic text-[#3f3f3f] text-sm font-bold">
            Your Shopping Card is Empty
          </span>
          <p className="text-blue-800 font-semibold">Continue shopping</p>
        </div>
      </div>

      {/* // ! Open Navbar  */}

      <div
        className={`fixed top-0 w-full z-[10] transition-all xl:hidden ${
          openMobileNav ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="w-[85%] h-screen bg-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            {showMobileNavItem === "Shob By Concern" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "19px",
                }}
              >
                <IoIosArrowBack
                  size={25}
                  onClick={() => setShowMobileNavItem(false)}
                />
                Shob By Concern
              </div>
            ) : (
              ""
            )}
            {!showMobileNavItem && <span>Menu</span>}
            {showMobileNavItem === "Shob By Products" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "19px",
                }}
              >
                <IoIosArrowBack
                  size={25}
                  onClick={() => setShowMobileNavItem(false)}
                />
                Shob By Products
              </div>
            ) : (
              ""
            )}
            {showMobileNavItem === "Business with us" ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "19px",
                }}
              >
                <IoIosArrowBack
                  size={25}
                  onClick={() => setShowMobileNavItem(false)}
                />
                Business with us
              </div>
            ) : (
              ""
            )}
            <div
              className="w-[40px] h-[40px] bg-[#4b4b4b] flex items-center justify-center rounded text-white text-2xl cursor-pointer"
              onClick={() => setOpenMobileNav(false)}
            >
              <FaXmark />
            </div>
          </div>
          <hr
            style={{
              marginTop: "20px",
              border: "1px solid gray",
            }}
          />
          {!showMobileNavItem && (
            <div className={`${styles["mobile-nav-menu-items-link"]}`}>
              <ul>
                <li
                  onClick={() => setShowMobileNavItem("Shob By Concern")}
                  className="flex items-center justify-between py-4 px-0 border-b text-lg font-normal text-[#44444]"
                >
                  Shob By Concern <IoIosArrowForward size={23} />
                </li>
                <li
                  onClick={() => setShowMobileNavItem("Shob By Products")}
                  className="flex items-center justify-between py-4 px-0 border-b text-lg font-normal text-[#44444]"
                >
                  Shob By Products <IoIosArrowForward size={23} />
                </li>
                <li
                  onClick={() => setShowMobileNavItem("Business with us")}
                  className="flex items-center justify-between py-4 px-0 border-b text-lg font-normal text-[#44444]"
                >
                  Business with us <IoIosArrowForward size={23} />
                </li>
                <li className="flex items-center justify-between py-4 px-0 border-b text-lg font-normal text-[#44444]">
                  Consult an acharya(Doctor)
                </li>
                <li className="flex items-center justify-between py-4 px-0 border-b text-lg font-normal text-[#44444]">
                  Gifting
                </li>
              </ul>
            </div>
          )}
          {showMobileNavItem === "Shob By Concern" && (
            <ul className={`${styles["mobile-nav-menu-items-link"]}`}>
              <li>Piles Relief</li>
              <li>Healthy Liver</li>
              <li>Magic Man Booster</li>
              <li>Digestive Fitness</li>
              <li>Easing Diabates</li>
              <li>Hangover Shots</li>
              <li>Revital Body Shots</li>
              <li>Kidney Stone Care</li>
              <li>Glowing Woman</li>
              <li>Strees Buster</li>
              <li>Powerful Heart</li>
              <li>Pain Relief</li>
            </ul>
          )}
          {showMobileNavItem === "Shob By Products" && (
            <ul className={`${styles["mobile-nav-menu-items-link"]}`}>
              <li>Honey</li>
              <li>Cooking Oil</li>
              <li>A2 Desi Cow Ghee</li>
              <li>Apple Cidar Vinegar</li>
              <li>Herbal Juice</li>
              <li>Hill Turmeric</li>
              <li>Jaggery Amla Candy</li>
              <li>Welness Oil</li>
              <li>Chayanprash</li>
              <li>Nuts in Honey</li>
              <li>Stevia</li>
              <li>Shilajit</li>
              <li>Safron</li>
              <li>Mouth Freshner</li>
              <li>Condiments</li>
            </ul>
          )}
          {showMobileNavItem === "Business with us" && (
            <ul className={`${styles["mobile-nav-menu-items-link"]}`}>
              <li>Privet Label</li>
              <li>Bulk Purchase</li>
              <li>Dealership Enquary</li>
              <li>Contact us</li>
            </ul>
          )}
          <div className="h-[150px] w-full border-b"></div>
          <span
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "10px",
              fontSize: "17px",
              color: "#494949",
            }}
          >
            Got a question? Call us
          </span>
          <div className="flex items-center justify-center p-4">
            <BsTelephone />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
