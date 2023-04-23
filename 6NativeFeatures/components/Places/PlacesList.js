import { FlatList,StyleSheet,View,Text } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

function PlacesList({places})
{

    const navigation=useNavigation();


    function selectedPlaceHandler(id)
    {
        navigation.navigate('PlaceDetails',{
            placeId:id
        })
    }


    if(!places || places.length===0)
    {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackSize}>No places added yet !, start adding some</Text>
        </View>
    }

    return <FlatList style={styles.list} data={places} keyExtractor={(item)=>item.id} renderItem={({item})=><PlaceItem onSelect={selectedPlaceHandler} place={item}></PlaceItem>} ></FlatList>
}

export default PlacesList;

const styles=StyleSheet.create({
    list:{
        marginTop:24,
        marginLeft:10
    },
    fallbackContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    fallbackSize:{
        fontSize:16,
        color:Colors.primary200
    }
})