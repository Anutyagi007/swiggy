import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { AiTwotoneStar } from "react-icons/ai";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [resMenu, setResMenu] = useState([]);
  const [res, setRes] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5270362&lng=77.13593279999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRes(json.data.cards[0].card.card.info);
    setResMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    console.log(json.data.cards[0].card.card.info);
  }
  const handleaddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="flex justify-center align-middle items-center flex-col">
      <div className="border border-gray-300 w-2/3 flex justify-between mt-5 shadow-2xl">
        <div className="my-5 p-5">
          <h1 className="font-bold text-xl font-serif">{res.name}</h1>
          <h1 className=" font-light">{res.cuisines}</h1>
          <h1 className="font-light">
            {res.locality},{res.city}
          </h1>
          <h1 className="flex items-center font-light">
            {res.avgRatingString}
            <AiTwotoneStar /> | {res.totalRatingsString}{" "}
          </h1>
          <h1 className="font-light">{res.costForTwoMessage}</h1>
        </div>

        <div className="rounded-lg">
          <img
            className="rounded-lg w-64 my-5 p-5"
            src={IMG_CDN_URL + res.cloudinaryImageId}
            alt="res_logo"
          />
        </div>
      </div>

      <div>
        <h1 className="text-center font-bold text-2xl w-2/3 h-full"> </h1>
        {resMenu.map((item) => (
          <div
            key={item.card.info.id}
            className="flex justify-between border-2 border-gray-200 w-full h-40 p-2 m-2"
          >
            <div className="flex flex-col my-5">
              <span className={`${item.card.info.itemAttribute.vegClassifier==="VEG"? "bg-green-400 rounded-full w-4 h-4": "bg-red-400 rounded-full  border-red-400"}`}></span>
              <span className="font-bold">{item.card.info.name}</span>
              <span className="">₹{item.card.info.price / 100}</span>
              <span className="text-sm font-light">{item.card.info.description}</span>
            </div>
            <div className="w-48 flex flex-col justify-center items-center mt-3">
              <img
                className="w-40 rounded-lg"
                alt="food_logo"
                src={IMG_CDN_URL + item.card.info.imageId}
              />
              <button
                onClick={() => {
                  handleaddItem(item);
                }}
                className="bg-pink-300 p-2 m-2 rounded-md"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
