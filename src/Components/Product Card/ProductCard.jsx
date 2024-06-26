import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

function ProductCard() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className="card border p-3 ">
      <div
        className="card-header relative h-96 rounded-2xl overflow-hidden"
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <div className="flex justify-between items-center w-full absolute p-4 z-[10]">
          <Button className="bg-primary">Best Seller</Button>
          <FaRegHeart color="red" size={25} />
        </div>
        <div className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt=""
            className="absolute  h-full w-full object-cover group"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
            className={`absolute h-full w-full object-cover transition-all ${
              mouseOver ? "left-0" : "left-full"
            }`}
          />
        </div>
      </div>
      <div className="card-body py-4">
        <p className="font-bold text-lg">Vana Tulsi Flower</p>
        <hr className="my-2 border border-gray-400" />
        <div className="flex items-center gap-4">
          <span className="line-through text-sm text-gray-500">Rs. 459.00</span>
          <span className="text-base font-semibold ">Rs. 369.00</span>
          <span className="bg-red-700 text-white rounded text-[12px] px-2 py-1">
            SAVE 20%
          </span>
        </div>
      </div>
      <div className="card-footer">
        <button className="w-full border p-2 rounded text-primary font-semibold text-sm border-primary hover:bg-primary hover:text-white transition-all">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
