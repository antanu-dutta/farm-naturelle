import { createContext, useContext, useState } from "react";
import { Products } from "../Data Asset/allProduct";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState({});
  const getFilter = (type) => {
    return Products.filter((curElem) => curElem.category === type);
  };
  const getSingleProduct = (product) => {
    setSingleProduct(product);
  };
  const contextValue = {
    getFilter,
    Products,
    singleProduct,
    getSingleProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
