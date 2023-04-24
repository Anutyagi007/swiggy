import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../utils/UserContext'
const Header = () => {
    const AuthenticateUser=()=>{
        return false
    }
    const[isLoggedIn,setIsLoggedIn]=useState(AuthenticateUser)
    const {user}=useContext(userContext);
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
             <Link><li className='m-2 p-2'>Cart</li></Link>
            </ul>
        </div>
        {user.name}
        {
            isLoggedIn? <button className='bg-pink-300 rounded-md h-12 text-white m-6 p-2' onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button className='bg-pink-300 rounded-md h-12 text-white m-6 p-2' onClick={()=>setIsLoggedIn(true)}>Login</button>
        }
        
        
    </div>
  )
}

export default Header