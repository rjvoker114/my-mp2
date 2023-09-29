import React, { useEffect } from 'react'

function Banner({gameBanner}) {
  useEffect(()=>{
    
  },[])
  return (
    <div className='relative m-4'>
      <div className='absolute bottom-0 p-5 bg-gradient-to-t
      from-slate-900 to-transparent w-full rounded-xl'>
        <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
        <button className='bg-black text-white font-bold hover:bg-gray-500'>Get Now</button>
      </div>
      <img src={gameBanner.background_image} className='md:h-[550px] w-full object-cover mt-2 rounded-xl'/>
    </div>
  )
}

export default Banner