import React from "react";
import CategoryItem from "../category-item/category-item.component";

function Directory() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/hats.png",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/hats.png",
      route: "shop/mens",
    },
  ];
  return (
    <div className="grid grid-cols-2  grid-rows-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {categories.map(({ id, title, imageUrl, route }) => {
        return (
          <CategoryItem
            key={id}
            id={id}
            title={title}
            imageUrl={imageUrl}
            route={route}
          />
        );
      })}
    </div>
  );
}

export default Directory;
