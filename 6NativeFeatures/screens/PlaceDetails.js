import { View, Text,StyleSheet,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import OutlinedButton from '../components/ui/OutlinedButton'
import { Colors } from '../constants/colors'
import { fetchPlaceDetails, fetchPlaces } from '../util/database'
import { useNavigation } from '@react-navigation/native'

export default function PlaceDetails({route}) {


    const[fetchedPlace,setFetchedPlace]=useState();
    const selectedPlaceid=route.params.placeId;

    const navigation=useNavigation();




    useEffect(()=>{

        async function loadPlaceData()
        {
          const place= await fetchPlaceDetails(selectedPlaceid);
          setFetchedPlace(place);
          navigation.setOptions({
            title:place.title
          })
        }

        loadPlaceData();

    },[selectedPlaceid])




    function showOnMapHandler()
    {
        navigation.navigate('Map',{
            initialLat:fetchedPlace.lat,
            initialLng:fetchedPlace.lng
        })
    }




    if(!fetchedPlace)
    {
     return  <View style={styles.fallback}>
        <Text>Loading Place data...</Text>
       </View>
    }



  return (
    <ScrollView>
        <Image source={{uri:fetchedPlace.imageUri}} style={styles.image}/>
        <View style={styles.locationContainer}>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>Across india</Text>
            </View>
            <OutlinedButton icon="map" onPress={showOnMapHandler}>View on Map</OutlinedButton>
        </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
    fallback:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:'35%',
        minHeight:300,
        width:'100%'
    },
    locationContainer:{
        justifyContent:'center',
        alignItems:"center"
    },
    addressContainer:{
        padding:20
    },
    address:{
        color:Colors.primary500,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16
    }
})