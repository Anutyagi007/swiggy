import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [searchText,setSearchText]=useState();
  const[restaurants,setRestaurants]=useState([])
  const [fiterres,setFilterres]=useState([])
  const handleSubmit=(searchText,restaurants)=>{
    const filterData= restaurants.filter((restaurant)=>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())

    )
    return filterData;
  }
  const TopRated=()=>{
    const toprated=restaurants.filter((restaurants)=>
      restaurants.data.avgRating>=4)
      setFilterres(toprated)

  }
  useEffect(()=>{
    getRestaurants()
  },[])

  async function getRestaurants(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6628779&lng=77.4648192&page_type=DESKTOP_WEB_LISTING")
    const json= await data.json()
    setRestaurants(json.data.cards[2].data.data.cards)
    setFilterres(json.data.cards[2].data.data.cards)
    console.log(json.data.cards[2].data.data.cards)
  }
  
  return (
    restaurants.length===0? (<Shimmer/>):
    <div >
      <div className='p-2 m-2 flex justify-evenly'>
        <div>
        <input type="text" placeholder='Search'className=' ml-20 p-2 rounded w-60' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          <button className='bg-pink-300 rounded-md w-20 text-white m-2 p-2' onClick={()=>{
            const data=handleSubmit(searchText,restaurants)
            setFilterres(data)
          }}>Search</button>
        </div>
        <div>
          <button className='bg-pink-300 rounded-md w-44 text-white m-2 p-2' onClick={()=>TopRated()}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {
          fiterres.map((restaurant)=>(
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}> <RestaurantCard resData={restaurant}/></Link>
          ))
        }
      </div>
    </div>
  )
}

export default Body