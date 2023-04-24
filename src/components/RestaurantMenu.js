import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [resMenu, setResMenu] = useState([]);
  const [res, setRes] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  });
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRes(json.data.cards[0].card.card.info);
    setResMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  }
  return (
    <div>
      <div className="text-center mb-20">
        <h1>Restaurant id:-{resId}</h1>
        <h1 className="font-bold text-2xl m-2 p-2">{res.name}</h1>
        <div className="flex justify-center"><img
          className="w-64 rounded m-2 p-2 "
          src={IMG_CDN_URL + res.cloudinaryImageId}
          alt="res_logo"
        /></div>
        <h1 className="font-bold text-xl m-2 p-2">{res.cuisines}</h1>
        <h1 className="font-bold text-xl m-2 p-2">{res.costForTwoMessage}</h1>
        <h1 className="font-bold text-xl m-2 p-2">{res.avgRatingString} stars</h1>
      </div>

      <div>
        <h1 className="text-center font-bold text-2xl"> Menu </h1>
        {resMenu.map((item) => (
          <div key={item.card.info.id} className="flex justify-around border-2 border-black m-2 p-2">
            <img
              className="w-20 rounded-full"
              alt="food_logo"
              src={IMG_CDN_URL + item.card.info.imageId}
            />{" "}
            <span className="p-2 m-2">{item.card.info.name}</span>{" "}
            <span className="p-2 m-2">{item.card.info.price / 100}</span>{" "}
            <button className="bg-pink-300 p-2 m-2 rounded-md">Add Item</button>{" "}
            <button className="bg-pink-300 p-2 m-2 rounded-md">
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
