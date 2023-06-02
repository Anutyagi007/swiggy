import React from 'react'
import { IMG_CDN_URL } from '../utils/constant';


const FoodItems = ({
    name,
    category,
    imageId,
    price
}) => {
  return (
    <div className='p-2 m-2 w-52 flex flex-col border-2 border-black rounded-lg'>
        <img src={IMG_CDN_URL+imageId} className='w-248 h-24 rounded-md' alt="" />
        <h2 className='font-semibold'>{name}</h2>
        <h3 className='font-light'>{category}</h3>
        <h4>₹{price/100}</h4>
    </div>
  )
}

export default FoodItems;