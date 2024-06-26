import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

function ProductCard() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className="card w-96 border  p-4 shadow-2xl">
      <div
        className="card-header relative h-96 rounded-3xl overflow-hidden"
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
      <div className="card-body"></div>
      <div className="card-footer"></div>
    </div>
  );
}

export default ProductCard;
