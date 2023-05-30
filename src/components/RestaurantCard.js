import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import {AiTwotoneStar} from "react-icons/ai"

const RestaurantCard = ({ resData }) => {
  return (
    <div className="p-2 m-2 w-60 flex flex-col border-2 border-gray-200 rounded-lg hover:shadow-xl hover:border-gray-300">
      <div className="h-48">
      <img
        src={IMG_CDN_URL + resData.data.cloudinaryImageId}
        className="rounded-lg"
        alt=""
      />
      <h2 className="font-semibold text-lg">{resData.data.name}</h2>
      </div>
      <div className="items-center h-12 ">
        <h3 className="font-light text-sm">
          {resData.data.cuisines.join(" ,")}
        </h3>
      </div>
      <div className="flex p-1 m-1 h-8">
        <h4 className={`text-xs mx-2 p-1 ${(resData.data.veg) ? "bg-green-600" : "bg-red-600"} }`}><span className="flex items-center justify-center">{resData.data.avgRating}<AiTwotoneStar/></span></h4>
        <h4 className="text-xs mx-2 p-1 font-semibold">{resData.data.deliveryTime}min</h4>
        <h4 className="text-xs p-1" >{resData.data.costForTwoString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
