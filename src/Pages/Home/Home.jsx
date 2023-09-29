import React, { useEffect, useState } from 'react'
import Genre from '../../Components/GenreList'
import Banner from '../../Components/Banner'
import TrendingGames from "../../Components/TrendingGame"
import Api from '../../API/Api'
import GamesByGenresId from '../../Components/GamesByGenreId'


function Home() {
  const[AllGamesList,setAllGameList]=useState();
  const[gameListByGenres,setGameListByGenres]=useState([])
  useEffect(()=>{
    getAllGamesList();
    getGameListByGenreId(4);
  },[])

  const getAllGamesList=()=>{
    Api.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results)
      
    })
  }

  const getGameListByGenreId=(id)=>{
    // console.log("GENE",id)
    Api.getGameListByGenreId(id).then((resp)=>{
      // console.log("Game List By GenresId:",resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }
  return (
    <div className='grid grid-cols-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '>
      <div className='hidden md:block  text-white'>
        <Genre setGenresId={(setGenresId)=>getGameListByGenreId(setGenresId)}/>
        </div>
      <div className='col-span-4 md:col-span-3'>
       {AllGamesList?.length>0&&gameListByGenres.length>0?
        <div>
          <Banner gameBanner={AllGamesList[0]}/>
          <TrendingGames gameList={AllGamesList}/>
          <GamesByGenresId gameList={gameListByGenres}/>
        </div>
        :null}
        </div>
    </div>
  )
}

export default Home