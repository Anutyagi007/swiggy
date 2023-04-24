import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(15).fill("").map((e,index)=><div key={index} className='pt-24 mt-24 ml-2 w-52 h-64 bg-gray-200 flex flex-wrap'></div>)}
    </div>
  )
}

export default Shimmer;