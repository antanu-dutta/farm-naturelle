import React from "react";
import {
  FaLongArrowAltRight,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const footerImage = [
    {
      url: "https://farmnaturelle.com/cdn/shop/files/Link_Amazon_png_480x.png?v=1696490249",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/FLIPKART_1_480x.png?v=1704798125",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/image_12383_480x.png?v=1696490466",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/Link_meesho_png_480x.png?v=1696490466",
    },
    {
      url: "https://farmnaturelle.com/cdn/shop/files/NicePng_alibaba-logo-png_2803824_1_480x.png?v=1696490466",
    },
  ];
  const websiteData = {
    categories: [
      "Honey",
      "Cooking Oil",
      "A2 Ghee",
      "Apple Cidar Vinegar",
      "Herbal Juices",
      "Hill Turmeric",
      "Amla candy",
      "Wellness Oils",
      "Stevia",
    ],
    importantLinks: [
      "About Us",
      "Our Farms",
      "Contact Us",
      "Bulk Purchase",
      "Blogs",
      "Privacy Policy",
      "Terms and Condition",
      "Shipping Policy",
      "Refund Policy",
    ],
  };
  const paymentCard = [
    "https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-visa.png?v=77682190091476822571713351401",
    "https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-mastercard.png?v=25567033732622262981713351401",
    "https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-americanexp.png?v=137006734920877356331713351401",
    "https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-paypal.png?v=48995582256179621891713351401",
    "https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-discover.png?v=11980595818515657511713351401",
    "https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-shopify.png?v=48862370562683140221713351401",
    "https://farmnaturelle.com/cdn/shop/t/64/assets/ff-checkout-7.png?v=15029955320502882341713351401",
  ];
  return (
    <footer>
      <div className="relative h-[500px]">
        <img
          src="https://farmnaturelle.com/cdn/shop/files/Group_14856848.png?v=1696491609"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute py-8 top-0 w-full">
          <div className="container">
            <div className="flex flex-col items-center">
              <h2 className="text-primary text-4xl font-semibold mb-8">
                Also Available On
              </h2>
              <div className="flex justify-evenly w-full items-center">
                {footerImage.map((item, index) => (
                  <img src={item.url} alt="" className="w-[120px]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary pt-10">
        <div className="container">
          <div className="flex mb-16 gap-8">
            <div className="flex-1">
              <img
                src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Link_cropped-cropped-FN_logo_2021-1-e1662637473598_png.png?v=1696492045"
                alt=""
                className="mb-4"
              />
              <p className="text-sm text-white mb-4">
                Become a Insider and get 10% off your order today. Plus we'll
                keep you up-to-date with the latest theme news.
              </p>
              <div className="flex items-center p-3 gap-4 bg-white justify-between rounded">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="text-sm text-black font-medium outline-none w-full "
                />
                <FaLongArrowAltRight />
              </div>
            </div>
            <div className="flex-1 text-white">
              <span className="block mb-4 text-[17px] font-bold">CATEGORY</span>
              <ul className="flex flex-col gap-4">
                {websiteData.categories.map((item, index) => (
                  <li className=" text-[15px] font-medium" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 text-white">
              <span className="block mb-4 text-[17px] font-bold">
                IMPORTANT LINKS
              </span>
              <ul className="flex flex-col gap-4">
                {websiteData.importantLinks.map((item, index) => (
                  <li className=" text-[15px] font-medium" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 text-white">
              <span className="block mb-4 text-lg font-bold">CONTACT INFO</span>
              <p className="text-base leading-6 mb-4">
                PHONE: <br /> 9810988725, 8130531333
              </p>
              <p className="text-base leading-6 mb-4">
                E-MAIL: <br /> hello@farmnaturelle.com
              </p>
              <div className="flex gap-4 px-3 text-2xl">
                <FaFacebook />
                <FaInstagram />
                <FaWhatsapp />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-10 ">
          <div className="container">
            <div className="flex text-white items-center justify-between">
              <span>&copy; 2024 Farm Naturelle . All rights reserved.</span>
              <div className="flex gap-3">
                {paymentCard.map((item) => (
                  <img src={item} className="w-12" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
