import { TextInput,Text, View,StyleSheet} from "react-native"
import { GlobalStyles } from "../../constants/styles"

export default function Input({invalid,label,textInputConfig}) {

    let inputStyles=[styles.input]

    let styling

    if(label==='Amount'||label==='Date')
    {
        styling={flex:1}
    }

    if(textInputConfig && textInputConfig.multiline)
    {
        inputStyles.push(styles.inputMultiline)
    }

    if(invalid)
    {
        inputStyles.push(styles.invalidInput)
    }

  return (
    <View style={[styles.inputContainer,styling]}>
        <Text style={[styles.label,invalid&&styles.invalidLabel]}>{label}</Text>
        <TextInput style={inputStyles} {...textInputConfig}></TextInput>
    </View>
  )
}


const styles=StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        padding:6,
        borderRadius:6,
        fontSize:18,
        color:GlobalStyles.colors.primary700
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    },
    invalidLabel:{
        color:GlobalStyles.colors.error500
    },
    invalidInput:{
        backgroundColor:GlobalStyles.colors.error50
    }
})