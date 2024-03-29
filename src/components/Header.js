import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../utils/UserContext'
import {useSelector} from "react-redux"
const Header = () => {
    const AuthenticateUser=()=>{
        return false
    }
    const[isLoggedIn,setIsLoggedIn]=useState(AuthenticateUser)
    const {user}=useContext(userContext);
    const cartItems=useSelector(store=>store.cart.items)
  return (
    <div className='flex justify-between border-2 border-black'>
        <div>
            <Link to="/"><img src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="logo" className='w-32' /></Link>
        </div>
        <div className='flex'>
            <ul className='flex m-2 p-2 justify-between'>
             <Link to="/"><li className='m-2 p-2'>Home</li></Link>
             <Link to="/about"><li className='m-2 p-2'>About</li></Link>
             <Link to="/contact"><li className='m-2 p-2'>Contact</li></Link>
             <Link to="/instamart"><li className='m-2 p-2'>Instamart</li></Link>
             <Link to="/cart"><li className='m-2 p-2 flex'><img className='h-8' src='https://www.vhv.rs/dpng/d/444-4445748_shopping-cart-number-display-shopping-cart-icon-with.png' alt='cart'/><span className='bg-pink-300 rounded-full w-8 flex items-center justify-center'>{cartItems.length}</span></li></Link>
            </ul>
        </div>
        {
            isLoggedIn? <button className='bg-pink-300 rounded-md h-12 text-white m-6 p-2' onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button className='bg-pink-300 rounded-md h-12 text-white m-6 p-2' onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
        
        
    </div>
  )
}

export default Header