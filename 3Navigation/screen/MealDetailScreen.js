import { View,StyleSheet,Text,Image ,ScrollView} from "react-native";
import MealDetail from "../components/MealDetail";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

function MealDetailScreen({route,navigation})
{

    function headerButtonPress()
    {
        console.log("pressed");
    }


    useLayoutEffect(()=>{
     navigation.setOptions({
        headerRight:()=>{
            return <IconButton icon="star" color='white' onPress={headerButtonPress}></IconButton>
        }
     })   
    },[navigation,headerButtonPress])

    const mealId=route.params.mealId;
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)


    return <ScrollView style={styles.root}>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}></Image>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail style={styles.mealDetail} textStyle={styles.mealDetail} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}></MealDetail>
       <View style={styles.listOuterContainer}>
       <View style={styles.listContainer}>
       <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients}></List>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps}></List>
        </View>
        </View>
    </ScrollView>
}

const styles=StyleSheet.create({
    root:{
        marginBottom:32
    },
    image:{
        width:'100%',
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        color:'white',
        textAlign:'center'
    },
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:24,
        marginVertical:4,
        padding:6,
    },
    mealDetail:{
        color:'white'
    },
    listContainer:{
        width:'80%'
    },
    listOuterContainer:{
        alignItems:'center'
    }
})

export default MealDetailScreen;