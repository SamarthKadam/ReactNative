import { FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



 function CategoriesScreen({navigation}) {



    function renderCategoryItem(itemData){

        function pressHandler()
    {
        navigation.navigate("MealsOverview",{
            categoryId:itemData.item.id
        });
    }

        return <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color}></CategoryGridTile>
    }




  return (
    <FlatList numColumns={2} data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem}></FlatList>    
  )
}

export default CategoriesScreen;
