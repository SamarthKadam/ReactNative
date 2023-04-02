import { FavoriteContext } from "../context/favorites-context"
import { useContext } from "react"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data";
import { StyleSheet,View,Text } from "react-native";

export default function Faviorates() {

  const favoriteMealContext=useContext(FavoriteContext);

  const FavoriteMeals=MEALS.filter(meal=>favoriteMealContext.ids.includes(meal.id))

  if(FavoriteMeals.length===0)
  {
    return <View style={styles.rootContainer}>
             <Text style={styles.text}>You have no favorite Meals !</Text>
           </View>
  }


  return (
    <MealList items={FavoriteMeals}></MealList>
  )
}

const styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
})
