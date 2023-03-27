import { View,Text,StyleSheet } from "react-native"
import Color from "../../util/Color";
function GuessLoginItem({roundNumber,guess})
{
    return <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess:{guess}</Text>
    </View>
}

export default GuessLoginItem;

const styles=StyleSheet.create({
    listItem:{
        borderColor:Color.primary_800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Color.accent_400,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3,

    }
})