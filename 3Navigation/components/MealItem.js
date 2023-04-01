import { Platform } from "react-native";
import { Pressable } from "react-native";
import { View,Text,StyleSheet,Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

export default function MealItem({id,title,imageUrl,duration,complexity,affordability}) {

    const navigation=useNavigation();


    function selectMealItemHandler()
    {
        navigation.navigate('MealDetail',{
            mealId:id
        })
    }

  return (
    <View style={styles.mealitem}>
        <Pressable onPress={selectMealItemHandler} android_ripple={{color:'#ccc'}} style={({pressed})=>(pressed?styles.buttonPressed:null)}>
            <View style={styles.innerContainer}>
            <View>
                <Image source={{uri:imageUrl}} style={styles.image} ></Image>
                <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetail duration={duration} affordability={affordability} complexity={complexity}></MealDetail>
            </View>
        </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    mealitem:{
        margin:16,
        elevation:4,
        borderRadius:8,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:Platform.OS==='android'?'hidden':'visible'
    },
    buttonPressed:{
        opacity:0.5
    },
    image:{
        height:200,
        width:'100%',
    },
    innerContainer:{
        borderRadius:8,
        backgroundColor:'white'
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8
    }
})