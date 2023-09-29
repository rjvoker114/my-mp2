import React, { useEffect } from 'react'

function TrendingGame({gameList}) {
    useEffect(()=>{
       
    },[])
  return (

   <div className='mt-5 hidden md:block'>
    <h2 className='font-bold text-[30px] text-white'>Trending Games</h2>
     <div className='hidden md:grid md:grid-cols-3 gap-4  lg:grid-cols-4 mt-3'>
        {gameList.map((item,index)=>index<4&&(
            <div className='bg-black rounded-lg group
            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'> 
                <img src={item.background_image} className='
                h-[270px] rounded-lg object-cover'/>
                <h2 className='text-white text-[20px]  p-2 font-bold'>{item.name}</h2>
            </div>
        ))}
    </div>
   </div>
  )
}

export default TrendingGame