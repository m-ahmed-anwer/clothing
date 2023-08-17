import { createContext, useEffect, useState } from "react";
import PRODUCTS from "../shop-data.json";
//import SHOP_DATA from "../data/shop-data";

import { getCategoriesAndDocument } from "../utils/Firebase/firebase.utils";

export const CatergoriesContext = createContext({
  catergoriesMap: {},
});

export const CatergoriesProvider = ({ children }) => {
  const [catergoriesMap, setCatergoriesMap] = useState(PRODUCTS);

  useEffect(() => {
    const getCategory = async () => {
      const map = await getCategoriesAndDocument();
      setCatergoriesMap(map);
    };
    getCategory();
  }, []);

  const value = { catergoriesMap };

  return (
    <CatergoriesContext.Provider value={value}>
      {children}
    </CatergoriesContext.Provider>
  );
};
