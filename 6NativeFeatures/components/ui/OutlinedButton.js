import { Pressable,StyleSheet,Text} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { Colors } from "../../constants/colors";
function OutlinedButton({onPress,icon,children})
{
    return <Pressable style={({pressed})=>[styles.button,pressed&&styles.pressed]} onPress={onPress}>
        <Ionicons style={styles.icon} size={18} color={Colors.primary500} name={icon}></Ionicons>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
}
export default OutlinedButton;


const styles=StyleSheet.create({
    button:{
        paddingHorizontal:12,
        paddingVertical:6,
        margin:4,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:Colors.primary500,
        flexDirection:'row'
    },
    pressed:{
        opacity:0.7
    },
    icon:{
        marginRight:6
    },
    text:{
        color:Colors.primary500
    }
})