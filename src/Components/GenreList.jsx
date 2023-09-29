import React, { useEffect, useState } from 'react'
import Api from '../API/Api'

function GenreList({setGenresId}) {

    const [genreList,setGenreList]=useState([])
    const[activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList=()=>{
        Api.getGenreList.then((resp)=>{
            setGenreList(resp.data.results);
        })
    }
  
  return (
    
    <div > 
      <h2 className='text-[30px] font-bold mt-5'>Genre</h2>
      {genreList.map((item,index)=>(
        <div
        onClick={()=>{setActiveIndex(index);setGenresId(item.id)}}
        className='flex gap-2 items-center mb-2 cursor-pointer
        hover:bg-gray-600 p-2 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out'>
            <img src={item.image_background} 
            className='w-[40px] h-[40px] object-cover rounded-lg '/>
            <h3 className='text[18px]'>{item.name}</h3>
        </div>
      ))}
    </div>
    
  )
}

export default GenreList