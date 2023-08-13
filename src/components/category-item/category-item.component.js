import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ id, title, imageUrl, route }) {
  return (
    <div
      className="m-4 max-w-max overflow-hidden rounded-xl shadow-lg "
      key={id}
    >
      <img src={imageUrl} className="w-full" alt={title} />
      <div className="px-5 py-6 text-center ">
        <h2 className="mb-2 text-xl font-bold" style={{ fontFamily: "REM" }}>
          {title}
        </h2>
        <Link to={route}>
          <button className="m-3 rounded-full bg-slate-700/50 p-2 text-sm text-gray-700 hover:rounded-lg hover:bg-slate-700/70 hover:text-gray-200/95">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
