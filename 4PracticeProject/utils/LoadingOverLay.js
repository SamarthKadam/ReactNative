import { View,ActivityIndicator,StyleSheet} from "react-native"
import { GlobalStyles } from "../constants/styles"

export default function LoadingOverLay() {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="white"></ActivityIndicator>
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
    }
})