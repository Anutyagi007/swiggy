import React from 'react'
import { IMG_CDN_URL } from '../utils/constant';


const FoodItems = ({
    name,
    category,
    imageId,
    price
}) => {
  return (
    <div className='p-2 m-2 w-52 flex flex-col border-2 border-black'>
        <img src={IMG_CDN_URL+imageId} className='w-248 h-24' alt="" />
        <h2 className='font-bold'>{name}</h2>
        <h3 className='font-semibold'>{category}</h3>
        <h4>Price :-{price/100}</h4>
    </div>
  )
}

export default FoodItems;