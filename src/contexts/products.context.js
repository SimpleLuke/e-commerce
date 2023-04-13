import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase";

import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
