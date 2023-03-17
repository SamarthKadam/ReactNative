import React from 'react'
import { StyleSheet,View,Text,Pressable } from 'react-native'
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
          <Pressable android_ripple={{color:'#210644'}} onPress={props.onDeleteGoal.bind(this,props.id)}>
            <Text style={styles.goalText}>{props.text}</Text>
          </Pressable>
    </View>
  );
}

export default GoalItem;

const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc'
      },
      goalText:{
        color:'white',
        padding:8
      }
})

//In react native we have onPress like functions available in ButtonComponent
//Onpress does'nt work in View,Text for that we need to include separate component that is Pressable