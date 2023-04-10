import { View,StyleSheet,Text,Button} from "react-native"
import { GlobalStyles } from "../constants/styles"

export default function ErrorOverlay({message,onConfirm}) {
  return (
    <View style={styles.container}>
    <Text style={[styles.text,styles.title]}>An error occurred!</Text>
    <Text style={styles.text} >{message}</Text>
    <Button onPress={onConfirm} title="Okay"></Button>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    text:{
        textAlign:'center',
        marginBottom:8,
        color:'white'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    message:{
        fontSize:14,
        color:'white'

    }
})