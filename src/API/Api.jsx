import axios from "axios";

const key="d05656c2efc84e5ea5284b7e5c6fed40";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId,
}