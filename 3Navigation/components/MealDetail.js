import { View,Text,StyleSheet } from "react-native";

function MealDetail({duration,complexity,affordability,style,textStyle})
{
    return <View style={[styles.details,style]}>
    <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
    <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
    <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
</View>
}

const styles=StyleSheet.create({
    details:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    detailItem:{
        marginHorizontal:8
    }
})

export default MealDetail;