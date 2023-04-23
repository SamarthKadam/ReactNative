import { View, StyleSheet,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { getCurrentPositionAsync,useForegroundPermissions,PermissionStatus } from 'expo-location'
import OutlinedButton from '../ui/OutlinedButton'
import { Colors } from '../../constants/colors'
import { useNavigation,useRoute,useIsFocused} from '@react-navigation/native'


    export default function LocationPicker({onPickLocation}) {

   const navigation=useNavigation();
   const route=useRoute();






    const[locationPermissionInformation,requestPermission]=useForegroundPermissions();
    const[pickedLocation,setPickedLocation]=useState();
    const isFocused=useIsFocused();




    useEffect(()=>{

      if(isFocused && route.params)
      {
        const mapPickedLocation=route.params && {longitude:route.params.pickedLng,latitude:route.params.pickedLt};
        setPickedLocation(mapPickedLocation);

      }

    },[route,isFocused])


    useEffect(()=>{
      onPickLocation(pickedLocation);
    },[pickedLocation,onPickLocation])



    async function verifyPermissions()
    {

      if(locationPermissionInformation.status===PermissionStatus.GRANTED)
      {
        return true;
      }

        if(locationPermissionInformation.status===PermissionStatus.UNDETERMINED)
    {
        const permissionResponse=await requestPermission();

        return permissionResponse.granted;
    }

    if(locationPermissionInformation.status===PermissionStatus.DENIED)
    {
        Alert.alert('Insufficient Permissions','You need to grant location permissions')
        return false;
    }
    return true;
    }


   async function getLocationHandler()
    {
      const hasPermissions=await verifyPermissions();

      

      if(!hasPermissions)
      {
        return ;
      }
      
      const location=await getCurrentPositionAsync()
      setPickedLocation({longitude:location.coords.longitude,latitude:location.coords.latitude});

    }

    function pickonMapHandler()
    {
      navigation.navigate('Map');
    }

    let content=<Text>No location selected</Text>

    if(pickedLocation)
    {
      content=<MapView style={styles.map}
      region={{
        latitude: pickedLocation.latitude,
        longitude:pickedLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      
    >
    <Marker  title='Picked Location' coordinate={{latitude:pickedLocation.latitude,longitude:pickedLocation.longitude}}></Marker>
    </MapView>
    }



  return (
    <View>
      <View style={styles.mapPreview}>
        {
          content
        }
      </View>
      <View style={styles.actions}>
        <OutlinedButton onPress={getLocationHandler} icon="location">Locate User</OutlinedButton>
        <OutlinedButton onPress={pickonMapHandler} icon="map">Pick on Map</OutlinedButton>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    mapPreview:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:4
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    map:{
      flex:1,
      width:'100%',
      height:'100%'
    }
})