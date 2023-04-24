import React from 'react'
import { useState } from 'react'
const Section=({title,desc,isVisible,setIsVisible})=>{
    
    return(
        <div className='border border-black p-2 m-2'>
            <h1 className='text-3xl p-2 m-2 font-bold'>{title}</h1>
            {
                isVisible?(<button className='p-2 m-2 underline' onClick={()=>{
                    setIsVisible(false)
                }}>Hide....</button>):(<button className='p-2 m-2 underline' onClick={()=>{
                    setIsVisible(true)
                }}>show....</button>)
            }
            
            
            { isVisible? <p className='p-2 m-2'>{desc}</p>:" "}
        </div>
    )
}
const Instamart = () => {
    const [visbleSection,setVisbleSection] =useState("about")
  return (
    
    <div>
        <Section title={"About Instamart"} desc={"Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is based in Bangalore and operates in 500 Indian cities as of September 2021.[5][6] Besides food delivery, Swiggy also provides on-demand grocery deliveries under the name Instamart, and a same-day package delivery service called Swiggy Genie."} 
         isVisible={visbleSection==="about"}
         setIsVisible={()=>setVisbleSection("about")}/>
        <Section title={"Team Instamart"} desc={"Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is based in Bangalore and operates in 500 Indian cities as of September 2021.[5][6] Besides food delivery, Swiggy also provides on-demand grocery deliveries under the name Instamart, and a same-day package delivery service called Swiggy Genie."} 
         isVisible={visbleSection==="team"}
         setIsVisible={()=>setVisbleSection("team")}/>
        <Section title={"Careers"} desc={"Swiggy is an Indian online food ordering and delivery platform. Founded in 2014, Swiggy is based in Bangalore and operates in 500 Indian cities as of September 2021.[5][6] Besides food delivery, Swiggy also provides on-demand grocery deliveries under the name Instamart, and a same-day package delivery service called Swiggy Genie."} 
         isVisible={visbleSection==="career"}
         setIsVisible={()=>setVisbleSection("career")}/>
    </div>
  )
}

export default Instamart