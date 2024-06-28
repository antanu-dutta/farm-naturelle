import React from "react";

function GiftBox(props) {
  const { title, image, description, price } = props;
  return (
    <div className="relative">
      <img src={image} alt="" className="object-cover w-full" />
      <div className="absolute top-0 w-full p-3 md:p-8 lg:p-10 ">
        <h2 className="text-white text-lg md:text-4xl font-semibold mb-3">
          {title}
        </h2>
        <p className="text-white text-base md:text-xl mb-4">{description}</p>
        <span className="text-xl text-[#c28e13]">
          Starting from &#8377; {price}
        </span>
        <button className="bg-white block relative top-4 md:top-16 lg:top-20 text-primary border border-primary font-semibold py-3 px-7 rounded-lg">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default GiftBox;
