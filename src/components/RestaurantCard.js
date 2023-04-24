import React from 'react'
import { IMG_CDN_URL } from '../utils/constant';


const RestaurantCard = ({resData}) => {
  return (
    <div className='p-2 m-2 w-52 flex flex-col border-2 border-black'>
        <img src={IMG_CDN_URL+resData.data.cloudinaryImageId} className='w-248 h-24' alt="" />
        <h2 className='font-bold'>{resData.data.name}</h2>
        <h3 className='font-semibold'>{resData.data.cuisines.join(" ,")}</h3>
        <h4>Rating :-{resData.data.avgRating} stars</h4>
        <h4> Delivery Time:-{resData.data.deliveryTime} mins</h4>
        <h4> Dining Cost:-{resData.data.costForTwoString} </h4>
    </div>
  )
}

export default RestaurantCard;