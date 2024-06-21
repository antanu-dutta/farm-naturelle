import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import styles from "./DesktopNav.module.css";
import { Link } from "react-router-dom";

function DesktopNav() {
  const [showNavLinks, setShowNavLinks] = useState();
  const [showSearchBar, setShowSearchBar] = useState();
  return (
    <div>
      <div className={`${styles["destop-navbar"]}`}>
        <div className={`container`}>
          <div className={`${styles["desktop-menubar"]}`}>
            {!showSearchBar && (
              <div className={`${styles["desktop-menubar-container"]}`}>
                <div className={`${styles["logo_menubar-links"]}`}>
                  <Link to="/">
                    <div className={`${styles["desktop-logo"]}`}>
                      <img
                        src="https://farmnaturelle.com/cdn/shop/files/Logo_1_1.png?v=1694410359"
                        alt="desktop-logo"
                      />
                    </div>
                  </Link>

                  <div className={`${styles["dekstop-menubar-links"]}`}>
                    <ul>
                      <li
                        onMouseOver={() => setShowNavLinks("Shob By Concern")}
                        onMouseLeave={() => setShowNavLinks("")}
                      >
                        Shob By Concern <IoIosArrowDown />
                        <ul
                          className={`${styles["dekstop-nav-links"]} ${
                            showNavLinks === "Shob By Concern"
                              ? styles["show-nav-links"]
                              : styles["hide-nav-links"]
                          }`}
                        >
                          <li>Piles Relief</li>
                          <li>Healthy Liver</li>
                          <li>Magic Man Booster</li>
                          <li>Digestive Fitness</li>
                          <li>Easing Diabetes</li>
                          <li>Hangover Shots</li>
                          <li>Revital Body Shots</li>
                          <li>Kidney Stone Care</li>
                          <li>Glowing Women</li>
                          <li>Stress Buster</li>
                          <li>Powerful Heart</li>
                          <li>Pain Relief</li>
                          <li>Win Weight</li>
                          <li>Detox Miracle Shot</li>
                        </ul>
                      </li>
                      <li
                        onMouseOver={() => setShowNavLinks("Shob By Products")}
                        onMouseLeave={() => setShowNavLinks("")}
                      >
                        Shob By Products <IoIosArrowDown />
                        <ul
                          className={`${styles["dekstop-nav-links"]} ${
                            showNavLinks === "Shob By Products"
                              ? styles["show-nav-links"]
                              : styles["hide-nav-links"]
                          }`}
                        >
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
                      </li>
                      <li
                        onMouseOver={() => setShowNavLinks("Business with us")}
                        onMouseLeave={() => setShowNavLinks("")}
                      >
                        Business with us <IoIosArrowDown />
                        <ul
                          className={`${styles["dekstop-nav-links"]} ${
                            showNavLinks === "Business with us"
                              ? styles["show-nav-links"]
                              : styles["hide-nav-links"]
                          }`}
                        >
                          <li>Privet Label</li>
                          <li>Bulk Purchase</li>
                          <li>Dealership Enquary</li>
                          <li>Contact us</li>
                        </ul>
                      </li>
                      <li>Consult an Acharya (Doctor)</li>
                      <li>Gifting</li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles["desktop-nav-icons"]}`}>
                  <div className={`${styles["desktop-heart-icon"]}`}>
                    <CiHeart />
                    <div className={`${styles["dekstop-icon-badge"]}`}>0</div>
                  </div>
                  <div
                    className={`${styles["desktop-search-icon"]}`}
                    onClick={() => setShowSearchBar(true)}
                  >
                    <IoSearch />
                  </div>
                  <Link to="/login">
                    <div className={`${styles["desktop-user-icon"]}`}>
                      <CiUser />
                    </div>
                  </Link>

                  <div className={`${styles["desktop-cart-icon"]}`}>
                    <PiShoppingCartSimpleLight />
                    <div className={`${styles["dekstop-icon-badge"]}`}>0</div>
                  </div>
                </div>
              </div>
            )}

            {showSearchBar && (
              <div className={`${styles["searchbar"]}`}>
                <div className={`${styles["searchbar-container"]}`}>
                  <div className={`${styles["searchbar-search-container"]}`}>
                    <input type="text" />
                    <div
                      className={`${styles["searchbar-xmark"]}`}
                      onClick={() => setShowSearchBar(false)}
                    >
                      <FaXmark />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNav;
