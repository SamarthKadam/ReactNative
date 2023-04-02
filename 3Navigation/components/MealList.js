import {StyleSheet,View,FlatList} from 'react-native'
import MealItem from './MealItem';

export default function MealList({items}) {
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
       <FlatList data={items} keyExtractor={(item)=>item.id} renderItem={renderMealItem}></FlatList>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})