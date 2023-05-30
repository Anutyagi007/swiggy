import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItems from './FootItems'
import { clearCart } from '../utils/cartSlice'


const Cart = () => {
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div className=''>
        <h1 className='font-bold'>Cart Items-{cartItems.length}</h1>
        <button className='bg-pink-300 rounded-md text-white p-2 m-2' onClick={()=>{handleClearCart()}}>Clear</button>
        <div className='flex'>
        {
          cartItems.map(item=><FoodItems key={item.card.info.id} {...item.card.info}/>)
        }
        </div>
    </div>
  )
}

export default Cart