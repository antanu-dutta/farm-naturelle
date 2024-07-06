import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";

function ProductCard({ item }) {
  const {
    id,
    name,
    originalPrice,
    discountedPrice,
    discount,
    imageUrl,
    hoverImageUrl,
  } = item;
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <Link to={`/product/${id}`}>
      <div className="card border p-3 ">
        <div
          className="card-header relative h-96 rounded-2xl overflow-hidden"
          onMouseOver={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        >
          <div className="flex justify-between items-center w-full absolute p-4 z-[10]">
            <span className="bg-orange-900 text-sm text-white py-1 px-2 rounded">
              Best Seller
            </span>
            <FaRegHeart color="red" size={25} />
          </div>
          <div className="w-full h-full">
            <img
              src={imageUrl}
              alt=""
              className="absolute  h-full w-full object-cover group"
            />
            <img
              src={hoverImageUrl}
              alt=""
              className={`absolute h-full w-full object-cover transition-all ${
                mouseOver ? "left-0" : "left-full"
              }`}
            />
          </div>
        </div>
        <div className="card-body py-4">
          <p className="font-bold text-lg">{name}</p>
          <hr className="my-2 border border-gray-400" />
          <div className="flex items-center gap-4">
            <span className="line-through text-sm text-gray-500">
              Rs.{originalPrice}
            </span>
            <span className="text-base font-semibold ">
              Rs. {discountedPrice}
            </span>
            <span className="bg-red-700 text-white rounded text-[12px] px-2 py-1">
              SAVE {discount}
            </span>
          </div>
        </div>
        <div className="card-footer">
          <button className="w-full border p-2 rounded text-primary font-semibold text-sm border-primary hover:bg-primary hover:text-white transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
