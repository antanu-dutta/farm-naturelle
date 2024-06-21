import React, { useEffect, useState } from "react";
import styles from "./MobileNav.module.css";
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
      document.body.classList.add(styles["overflow-hidden"]);
    } else {
      document.body.classList.remove(styles["overflow-hidden"]);
    }
    return () => document.body.classList.remove(styles["overflow-hidden"]);
  });
  return (
    <div>
      <div className={`${styles["mobile-navbar"]}`}>
        <div className={`container`}>
          <div className={`${styles["mobile-navbar-container"]}`}>
            <div className={`${styles.bar}`}>
              <FaBars onClick={() => setOpenMobileNav(true)} />
            </div>
            <Link to="/">
              <div className={`${styles["mobile-logo-container"]}`}>
                <img
                  src="https://farmnaturelle.com/cdn/shop/files/Logo_1_1.png?v=1694410359"
                  alt="site-logo"
                />
              </div>
            </Link>

            <div className={`${styles["mobile-nav-icons"]}`}>
              <div className={`${styles["cart-icon"]}`}>
                <PiShoppingCartSimpleLight onClick={() => setOpenCart(true)} />
              </div>
              <div className={`${styles["user-icon"]}`}>
                <Link to="/login">
                  <CiUser />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles["mobile-searchbar"]}`}>
            <div className={`${styles["mobile-searchbar-container"]}`}>
              <IoSearch className={`${styles["search-icon"]}`} />
              <input type="text" placeholder="Search ..." />
            </div>
          </div>
        </div>
      </div>

      {/* // ! Open Cart  */}

      {openCart && (
        <div className={`${styles["mobile-cart"]}`}>
          <div className={`${styles["cart-navigation"]}`}>
            <div></div>
            <h2>Shopping Cart</h2>
            <div
              className={`${styles["cart-xmark-btn"]}`}
              onClick={() => setOpenCart(false)}
            >
              <FaXmark />
            </div>
          </div>
          <div className={`${styles["cart-cart-items"]}`}>
            <img
              src="https://cdn.shopify.com/s/files/1/0362/6912/9860/t/6/assets/1659690328.png?v=1659690329"
              alt="cart-icon"
            />
            <span>Your Shopping Card is Empty</span>
            <p>Continue shopping</p>
          </div>
        </div>
      )}

      {/* // ! Open Navbar  */}

      {openMobileNav && (
        <div className={`${styles["mobile-nav-links-container"]}`}>
          <div className={`${styles["mobile-nav-links"]}`}>
            <div className={`${styles["mobile-nav-nagigation"]}`}>
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
                className={`${styles["mobile-nav-navigation-cross-btn"]}`}
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
                  <li onClick={() => setShowMobileNavItem("Shob By Concern")}>
                    Shob By Concern <IoIosArrowForward size={23} />
                  </li>
                  <li onClick={() => setShowMobileNavItem("Shob By Products")}>
                    Shob By Products <IoIosArrowForward size={23} />
                  </li>
                  <li onClick={() => setShowMobileNavItem("Business with us")}>
                    Business with us <IoIosArrowForward size={23} />
                  </li>
                  <li>Consult an acharya(Doctor)</li>
                  <li>Gifting</li>
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
            <div className={`${styles["mobile-nav-contact-us"]}`}></div>
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
            <div className={`${styles["mobile-nav-contact-phone-icon"]}`}>
              <BsTelephone />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
