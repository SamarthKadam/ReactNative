import { createContext, useState } from "react";

export const FavoriteContext=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
})


function FavoritesContextProvider({children})
{
    const[favoriteMealIds,setFavoriteMealIds]=useState([])


    function addFavorite(id)
    {
        setFavoriteMealIds((currFavIds)=>[...currFavIds,id])
    }

    function removeFavorite(id)
    {
        setFavoriteMealIds((currFavIds)=>currFavIds.filter((mealId)=>mealId!==id))
    }

    const value={
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }


    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export default FavoritesContextProvider;