import {TextInput,View,StyleSheet,Alert,Text,useWindowDimensions,KeyboardAvoidingView,ScrollView} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Color from '../util/Color';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber})
{
    const [enteredNumber,setEnteredNumber]=useState();

    const{width,height}=useWindowDimensions()



    function numberInputHandler(text)
    {
        setEnteredNumber(text);
    }

    function resetInputHandler()
    {
        setEnteredNumber();
    }


    function confirmInputHandler()
    {
        const chosenNumber=parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99)
        {
            Alert.alert('Invalid Number','Number has to be number between 1 to 99',[{text:'okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }

        onPickNumber(chosenNumber);

    }


    const marginTopDist=height<380?30:100;

    
   return <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
    <View style={[styles.rootContainer,{marginTop:marginTopDist}]}>
        <Title>Guess My Number</Title>
    <Card>
         <InstructionText>Enter a Number</InstructionText>
        <TextInput value={enteredNumber} onChangeText={numberInputHandler} style={styles.numberInput} maxLength={2} keyboardType='number-pad'autoCapitalize='none'autoCorrect={false} ></TextInput>

        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
        
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
            </View>
        </View>
    </Card>
    </View> 
    </KeyboardAvoidingView>
    </ScrollView>
}

export default StartGameScreen;




const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        alignItems:'center'
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:30,
        borderBottomColor:Color.accent_400,
        borderBottomWidth:2,
        color:Color.accent_400,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
})


///KeyboardAvoidingView It is used to display the content when the keyboard pannel completely covers the screen