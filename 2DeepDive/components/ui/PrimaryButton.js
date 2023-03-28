import {Text,View,Pressable,StyleSheet} from 'react-native'
import Color from '../../util/Color';

function PrimaryButton({children,onPress})
{


    return(
        
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed})=>pressed?[styles.buttonInnercontainer,styles.pressed]:styles.buttonInnercontainer} onPress={onPress} android_ripple={{color:Color.primary_600}}>
            <Text style={styles.button}>{children}</Text>
            </Pressable>
        </View>
    )

}
export default PrimaryButton;


const styles=StyleSheet.create({
    buttonOuterContainer:{
        elevation:2,
        overflow:'hidden',
        margin:4,
        borderRadius:28,
    },
    buttonInnercontainer:{
        backgroundColor:Color.primary_500,
        paddingVertical:8,
        paddingHorizontal:16
    },
    button:{
        color:'white',
        textAlign:'center'
    },
    pressed:{
        opacity:0.75
    }
})