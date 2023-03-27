import { View,StyleSheet,Dimensions } from "react-native";
import Color from "../../util/Color";
function Card({children})
{
    return <View style={styles.card}>{children}</View>
}
export default Card;

const deviceWidth=Dimensions.get('window').width;

const styles=StyleSheet.create({
    card:{
        alignItems:'center',
        marginTop:36,
        marginHorizontal:deviceWidth<380?18:24,
        padding:16,
        borderRadius:8,
        backgroundColor:Color.primary_900,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{height:2,width:0},
        shadowRadius:6,
        shadowOpacity:0.25
    }
})