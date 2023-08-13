import React from "react";

import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "./categories/category.component";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />

      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
