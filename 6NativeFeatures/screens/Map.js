import { View, Text,StyleSheet, Alert} from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import IconButton from '../components/ui/IconButton';

export default function Map({navigation,route}) {


  const intialLocation= route.params && {
    lat:route.params.initialLat,
    lng:route.params.initialLng
  };


  const [selectedLocation,setSelectedLocation]=useState(intialLocation);
   const region={
        latitude: intialLocation?intialLocation.lat:37.8,
        longitude: intialLocation?intialLocation.lng:74.9224,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }


      const savePickedLocationHandler=useCallback(()=>
      {
        if(!selectedLocation)
        {
          Alert.alert('No location picked','You have to pick location by tapping on the map')
          return ;
        }
        navigation.navigate('AddPlaces',{pickedLt:selectedLocation.latitude,pickedLng:selectedLocation.longitude})
      },[navigation,selectedLocation])
      
      useLayoutEffect(()=>{
        if(intialLocation)
        {return}
        navigation.setOptions({
          headerRight:({tintColor})=>(
          
            <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler}>

            </IconButton>
          )
        })
      },[navigation,savePickedLocationHandler,intialLocation])




      function selectedLocationHandler(event)
    {  
      const lat=event.nativeEvent.coordinate.latitude;
      const long=event.nativeEvent.coordinate.longitude;

      setSelectedLocation({latitude:lat,longitude:long});
    }

    console.log("this is")
    console.log(selectedLocation);

  return (
    <MapView style={style.map} region={region} onPress={selectedLocationHandler}>
      {selectedLocation&&<Marker title='Picked Location' coordinate={{latitude:selectedLocation.latitude,longitude:selectedLocation.longitude}}></Marker>}
    </MapView>
  )
}

const style=StyleSheet.create({
    map:{
        flex:1
    }
})