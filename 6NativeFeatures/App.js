import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/ui/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';
import { useEffect, useState } from 'react';
import { init } from './util/database';
import * as SplashScreen from 'expo-splash-screen';
import PlaceDetails from './screens/PlaceDetails';

SplashScreen.preventAutoHideAsync()
const Stack=createNativeStackNavigator();

export default function App() {


  const[dbInitialized,setDbInitialized]=useState(false);


  useEffect(()=>{
    init().then(()=>{
      setDbInitialized(true);
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  if(dbInitialized)
  {
    async function hideit()
    {
      await SplashScreen.hideAsync();
    }

    hideit();
  }




  return (
    <>
    <StatusBar style="dark"></StatusBar>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:Colors.primary500},
        headerTintColor:Colors.gray700,
        contentStyle:{backgroundColor:Colors.gray700}
      }}>
        <Stack.Screen name='AllPlaces' component={AllPlaces} options={({navigation})=>({
          title:'Your Favorite Places',
          headerRight:({tintColor})=><IconButton icon="add" size={24} color={tintColor} onPress={()=>navigation.navigate('AddPlaces')} ></IconButton>
        })} ></Stack.Screen>
        <Stack.Screen name='AddPlaces' component={AddPlace} options={{
          title:'Add a new Place',
        }} ></Stack.Screen>
        <Stack.Screen name='Map' component={Map}>

        </Stack.Screen>
        <Stack.Screen name='PlaceDetails' options={{
          title:'Loading Place..'
        }} component={PlaceDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
