import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { FaRegStar } from "react-icons/fa";
import styles from "../css/SingleProduct.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState(null);
  const [productCount, setProductCount] = useState(1);
  const { id } = useParams();
  const { Products } = useProductContext();
  const cartItems = [
    {
      content: <FaMinus />,
      border: true,
      clickable: true,
      clickType: "minus",
    },
    {
      content: productCount,
      border: true,
      clickable: false,
    },
    {
      content: <FaPlus />,
      border: false,
      clickable: true,
      clickType: "plus",
    },
  ];
  const handleProductCount = (type) => {
    if (type === "minus") {
      if (productCount >= 1) {
        setProductCount(productCount - 1);
      }
    } else if (type === "plus") {
      setProductCount(productCount + 1);
    }
  };
  useEffect(() => {
    const elem = Products.find((curElem) => curElem.id === id);
    setSingleProduct(elem);
  }, [id]);
  if (!singleProduct) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="py-[150px]">
      <div className="container">
        <div className="text-gray-800 text-sm uppercase">
          <Link to="/">HOME</Link> / {singleProduct.category}
        </div>
        <div className="flex gap-7">
          <div className="flex-1 flex flex-col gap-4">
            <img src={singleProduct.imageUrl} alt={singleProduct.name} />
            <div className="flex items-center gap-4 justify-center">
              {singleProduct.images.map((curElem, index) => (
                <img src={curElem} key={index} className="w-[100px]" />
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl text-gray-900 font-semibold -tracking-wide">
              {singleProduct.name}
            </h2>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-sm font-semibold">
                  {singleProduct.rating}
                </span>
              </div>
              <div className="text-sm font-normal">
                ({singleProduct.reviews} Reviews)
              </div>
            </div>
            <div className="p-4 bg-[#f2f7e3] flex items-center gap-3">
              <span className="text-3xl text-black font-semibold">
                Rs. {singleProduct.discountedPrice}
              </span>
              <span className="text-sm line-through text-red-900">
                Rs. {singleProduct.originalPrice}
              </span>
              <span className="text-lg bg-primary text-white rounded py-2 px-4">
                {singleProduct.discount}% off
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {singleProduct.productQualityTitle.map((curElem, index) => (
                <li
                  className={`${styles["product-quality"]} text-[15px] font-semibold`}
                  key={index}
                >
                  {curElem}
                </li>
              ))}
            </ul>
            <div>
              <span>Size</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-primary rounded-lg">
                  <select name="" id="" className="px-5 outline-none">
                    {singleProduct.quantity.map((curElem, index) => (
                      <option key={index}>{curElem}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-3  overflow-hidden border border-primary rounded-lg">
                  {cartItems.map((curElem, index) => (
                    <div
                      key={index}
                      className={`flex items-center transition justify-center ${
                        curElem.border && "border-r border-black"
                      } ${
                        curElem.clickable &&
                        "cursor-pointer hover:bg-primary hover:text-white"
                      }`}
                      onClick={() => {
                        if (curElem.clickable) {
                          handleProductCount(curElem.clickType);
                        }
                      }}
                    >
                      {curElem.content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
