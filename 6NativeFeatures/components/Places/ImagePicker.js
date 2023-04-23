import { View, Alert,Image,StyleSheet,Text} from 'react-native'
import React, { useState } from 'react'
import { launchCameraAsync,useCameraPermissions,PermissionStatus} from 'expo-image-picker'
import { Colors } from '../../constants/colors';
import OutlinedButton from '../ui/OutlinedButton';

export default function ImagePicker({onTakeImage}) {
 
   const[pickedImage,setPickedImage]=useState();
   const[cameraPermissionInformation,requestPermission]=useCameraPermissions();


   async function verifyPermissions()
   {
    if(cameraPermissionInformation.status===PermissionStatus.UNDETERMINED)
    {
        const permissionResponse=await requestPermission();

        return permissionResponse.granted;
    }


    if(cameraPermissionInformation.status===PermissionStatus.DENIED)
    {
        Alert.alert('Insufficient Permissions','You need to grant camera permissions')
        return false;
    }
    return true;
   }


   async function takeImageHandler()
    {
    const hasPermissions= await verifyPermissions();

    if(!hasPermissions)
    {
        return;
    }

    const image=await launchCameraAsync({
    allowsEditing:true,
    aspect:[16,9],
    quality:0.5});

    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri);


    }

 let imagePreview=<Text>No image taken yet.</Text>

 if(pickedImage)
 {
    imagePreview=<Image style={styles.image} source={{uri:pickedImage}}></Image>
 }




  return (
    <View>
     <View style={styles.imagePreview}>
        {imagePreview}
     </View>
    <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
    </View>
  )
}


const styles=StyleSheet.create({
    imagePreview:{
        width:'100%',
        height:200,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.primary100,
        borderRadius:4
    },
    image:{
        height:'100%',
        width:'100%'
    }
})