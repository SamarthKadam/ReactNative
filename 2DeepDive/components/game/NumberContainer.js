import {View,Text,StyleSheet,Dimensions} from 'react-native';
import Color from '../../util/Color';
function NumberContainer({children})
{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const deviceWidth=Dimensions.get('window').width;

const styles=StyleSheet.create({
    container:{
    borderWidth:4,
    borderColor:Color.accent_400,
    padding:deviceWidth<380?12:24,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center'
    },
    text:{
        color:Color.accent_400,
        fontSize:deviceWidth<380?28:36,
    }
})

export default NumberContainer;