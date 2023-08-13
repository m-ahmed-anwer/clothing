import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatergoriesContext } from "../../../context/catergories.context";
import Product from "../../../components/product/product.component";

function Category() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const { category } = useParams();
  const { catergoriesMap } = useContext(CatergoriesContext);

  const [products, setProducts] = useState(catergoriesMap[category]);

  useEffect(() => {
    setProducts(catergoriesMap[category]);
  }, [category, catergoriesMap]);

  return (
    <div>
      <div className="pt-14 text-center  sm:px-20">
        <span className=" font-mono text-xl font-semibold text-gray-800">
          {category.toUpperCase()}
        </span>
      </div>
      <div className="container inline-grid gap-4 pb-20 sm:grid-cols-2  md:grid-cols-3 ">
        {products &&
          products.map((res) => <Product product={res} key={res.id} />)}
      </div>
    </div>
  );
}

export default Category;
