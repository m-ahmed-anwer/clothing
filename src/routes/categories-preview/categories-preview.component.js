import React, { useContext } from "react";

import { CatergoriesContext } from "../../context/catergories.context";

import CategoryPreview from "../../components/category-preview/category-preview";

function CategoriesPreview() {
  const { catergoriesMap } = useContext(CatergoriesContext);

  return (
    <>
      <div class="divide-gray grid grid-cols-1 divide-y">
        {Object.keys(catergoriesMap).map((title) => {
          return <CategoryPreview key={title} title={title} />;
        })}
      </div>
    </>
  );
}

export default CategoriesPreview;
