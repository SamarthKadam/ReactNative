import {Text,StyleSheet,Platform} from 'react-native';
import Color from '../../util/Color';
function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}


const styles=StyleSheet.create({
    title:{
        fontSize:24,
        color:'white',
        textAlign:'center',
        borderWidth:Platform.OS==='android'?2:0,
        borderColor:'white',
        padding:12,
        maxWidth:'80%',
        marginBottom:10,
        width:300
    }
})

export default Title;

////Platform Doc