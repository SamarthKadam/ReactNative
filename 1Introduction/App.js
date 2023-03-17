import GoalItem from './components/GoalItem'
import { useState } from 'react';
import { StyleSheet, View,FlatList,Button} from 'react-native';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [Goals,setGoals]=useState([]);
  const[modelIsVisible,setmodelIsVisible]=useState(false);


  function addGoalHandler(inputValue)
  {
    setGoals((goals)=>[...goals,{text:inputValue,id:Math.random().toString()}])
  }

  function deleteGoalHandler(id)
  {
    setGoals((goals)=>{
      return goals.filter((goal)=>goal.id!=id)
    })
  }

  function startAddGoalHandler()
  {
    setmodelIsVisible(true);
  }

  function endAddGoalHandler()
  {
    setmodelIsVisible(false);
  }



  return (
    <>
    <StatusBar style='light'></StatusBar> 
    <View style={styles.appContainer}>
     <View style={styles.buttonContainer}><Button title='Add goal' color="#5e0acc" onPress={startAddGoalHandler}></Button></View> 
     <GoalInput visible={modelIsVisible} onaddGoal={addGoalHandler} onCancel={endAddGoalHandler}></GoalInput>
      <View style={styles.List}>
        <FlatList data={Goals} renderItem={(itemData)=>
        {
          return(<GoalItem id={itemData.item.id} onDeleteGoal={deleteGoalHandler} text={itemData.item.text}></GoalItem>)

        }} keyExtractor={(item,index)=>{
          return item.id;
        }} alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:70,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'#1e085a'
  },
  List:{
    flex:5,
  },
  buttonContainer:{
    marginBottom:20
  }
});

///React Native offers this type of styling.
//We have important components like View,Text,TextInput
//default flex is column wise,styling close to css



////StatusBar Its a component that needs to be included to display the background functtions like wifi,batterstatus with some option


///Cons of View:
// When we overflow content which is inside View. We won't be able to scroll.So we have alternative of using ScrollView component offered by ReactNative
//It should be inside an View component in which styles are defined

// ScrollView v/s Flatlist
// Scroll View will mount all the children at once while FlatList will calculate the items that are way off of distance based on the scroll and will unmount them.


// FlatList
//It should be wrapped with view component where styles are defined on it
//Lets consider below code


//  <FlatList data={Goals} renderItem={(itemData)=>
// {
//   return(<GoalItem id={itemData.item.id} onDeleteGoal={deleteGoalHandler} text={itemData.item.text}></GoalItem>)

// }} keyExtractor={(item,index)=>{
//   return item.id;
// }} alwaysBounceVertical={false}>
// </FlatList>


// * It takes data and renderItem as a parameter where data should be pointed to data containg variable
//   and in renderItem pass the iterable component.To access these values use itemData.item.?
//* If we have key property in all the objects in Goals Array then FlatList would identify key

//case:if we don't have key property defined instead we have id then we need to use keyextractor function to extract
//     the key

