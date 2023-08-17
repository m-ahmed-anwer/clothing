import React, { useContext } from "react";
import { CatergoriesContext } from "../../context/catergories.context";
import { Link } from "react-router-dom";
import Product from "../product/product.component";

function CategoryPreview({ title }) {
  const { catergoriesMap } = useContext(CatergoriesContext);

  return (
    <>
      <div>
        <div className="xs px-7 pt-14 sm:px-20 ">
          <Link to={title}>
            <span className=" font-mono text-xl font-semibold text-gray-800 hover:text-blue-700">
              {title.toUpperCase()}
            </span>
          </Link>
        </div>

        <div className="container inline-grid gap-4 pb-20 sm:grid-cols-2  md:grid-cols-3 ">
          {Array.isArray(catergoriesMap[title]) &&
            catergoriesMap[title]
              .slice(0, 3)
              .map((item) => <Product product={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
}

export default CategoryPreview;
