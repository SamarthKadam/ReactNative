import { Pressable,View,StyleSheet} from "react-native"
import {Ionicons} from '@expo/vector-icons'
export default function IconButton({icon,size,color,onPress}) {

    



  return (
    <Pressable onPress={onPress} style={({pressed})=>pressed&&styles.pressed}>
        <View>
            <Ionicons name={icon} size={size} color={color}></Ionicons>
        </View>
    </Pressable>
  )
}


const styles=StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        margin:8,
    },
    pressed:{
        opacity:0.75
    }
})