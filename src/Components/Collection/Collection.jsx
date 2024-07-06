import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import ProductCard from "../Product Card/ProductCard";

function Collection() {
  const { productType } = useParams();
  const { allProduct, getFilter } = useProductContext();
  let filteredProduct = [];
  if (productType === "shop-by-concern") {
    filteredProduct = getFilter("Juice");
  } else if (productType === "all-products") {
    filteredProduct = allProduct;
  }
  return (
    <div>
      <div className="p-36">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <span>
              <Link to="/">Home</Link> /
            </span>
          </div>
          <div className="grid grid-cols-4 gap-5 ">
            {filteredProduct.map((item, index) => (
              <ProductCard
                key={index}
                title={item.name.slice(0, 25) + " ..."}
                originalPrice={item.originalPrice}
                discountedPrice={item.discountedPrice}
                discount={item.discount}
                image={item.imageUrl}
                hoverImage={item.hoverImageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
