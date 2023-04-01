import { View,StyleSheet,Text } from "react-native";

function Subtitle({children})
{
    return <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
</View>
}

const styles=StyleSheet.create({
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginHorizontal:24,
        marginVertical:4,
        padding:6,
    }
})

export default Subtitle;