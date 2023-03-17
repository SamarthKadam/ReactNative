import React from 'react'
import { useState } from 'react';
import { StyleSheet,Modal,TextInput,Button,View, Image } from 'react-native'

export default function GoalInput(props) {

   const[inputValue,setinputValue]=useState('');

    function goalInputHandler(enteredText){
        setinputValue(enteredText);
      }

   function addGoalHandler()
    {
        props.onaddGoal(inputValue);
        setinputValue('');
        props.onCancel();
    }



  return (
    <Modal  visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
      <Image style={styles.ImageStyle} source={require('../assets/images/goal.png')}/>
        <TextInput value={inputValue}  onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your Course Goals'></TextInput>
        <View style={styles.buttonContainer}>
         <View><Button title='ADD GOAL' color='#5e0acc' onPress={addGoalHandler}></Button></View>
         <View><Button title='CANCEL' color='#f31282' onPress={props.onCancel}></Button></View>
       </View>
       </View>

      </Modal>
  )
}

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        backgroundColor:'#311b6b'
      },
      textInput:{
        width:'70%',
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        padding:5,
        marginRight:4
      },
      buttonContainer:{
        flexDirection:'row',
        width:'50%',
        marginTop:16,
        justifyContent:'space-around'
      },
      ImageStyle:{
        height:100,
        width:100,
        marginBottom:10
      },
      addbtn:{

      },
      cancelbtn:{

      }
})


///We have a Inbuilt modal component in react native, we have properties like visible,animationtype
///In ReactNative we have Image component where specifying the source is little strange its like including package in nodejs