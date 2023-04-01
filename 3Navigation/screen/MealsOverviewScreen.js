import { FlatList } from "react-native";
import { Text,View,StyleSheet} from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({route,navigation}) {

    const catId=route.params.categoryId;
    const displayedMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0
    })


    useLayoutEffect(()=>{

        const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;

        navigation.setOptions({
            title:categoryTitle
        })

    },[catId,navigation])


    function renderMealItem(itemData)
    {
        const item=itemData.item;

        const mealItemProp={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration
        }


       return <MealItem {...mealItemProp} ></MealItem>
    }


  return (
    <View style={styles.container}>
       <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}></FlatList>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})


//alternatively instead of using route as used above we can also use by making use of useroute hook