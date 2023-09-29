import React, { useEffect } from 'react'

function GamesByGenresId({gameList}) {
    useEffect(()=>{
        // console.log("GameList",gameList)

    },[])
  return (
    <div>
        <h2 className='font-bold text-white text-[30px]
        mt-5'>Popular Games</h2>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    gap-6 mt-5 text-white font-bold'>
        {gameList.map((item)=>( 
            <div className=' bg-black p-3 rounded-lg pb-12 text-[20px]
            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                <img src={item.background_image}className='w-full h-[80%]
                rounded-xl object-cover'/>
                <h2>{item.name}<span className='p-1 rounded-sm ml-2
                text-[10px] bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
                <h2 className='text-gray-500'>⭐{item.rating}  💭{item.reviews_count}    
                   🔥{item.suggestions_count}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default GamesByGenresId