import { Text,StyleSheet } from "react-native";
import Color from "../../util/Color";
function InstructionText({children,style})
{
    return <Text style={[styles.instructionText,style]}>{children}</Text>  
}
export default InstructionText;

const styles=StyleSheet.create({
    instructionText:{
        color:Color.accent_400,
        fontSize:24,
    }
})