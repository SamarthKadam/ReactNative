import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {Ionicons} from '@expo/vector-icons';

const BottomTab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#3c0a6b'},
        headerTintColor:'white',
        tabBarActiveTintColor:'#3c0a6b'
      }}>
        <BottomTab.Screen name='welcome' component={WelcomeScreen} options={
          {tabBarIcon:({color,size})=><Ionicons name='home' color={color} size={size}></Ionicons>}
        }></BottomTab.Screen>
        <BottomTab.Screen name='user' component={UserScreen} options={
          {tabBarIcon:({color,size})=><Ionicons name='person' color={color} size={size}></Ionicons>}
        }></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}










// import { StatusBar } from 'expo-status-bar';
// import { DarkTheme, NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import WelcomeScreen from './screens/WelcomeScreen';
// import UserScreen from './screens/UserScreen';
// import {Ionicons} from '@expo/vector-icons';

// const Drawer=createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator screenOptions={{
//         headerStyle:{backgroundColor:'#3c0a6b'},
//         headerTintColor:'white',
//         drawerActiveBackgroundColor:'#f0e1ff',
//         drawerActiveTintColor:'#3c0a6b',
//       }}>
//         <Drawer.Screen name='welcome' options={{
//           drawerLabel:'Welcome',
//           drawerIcon:({color,size})=><Ionicons name='home' color={color} size={size}></Ionicons>
//         }} component={WelcomeScreen}></Drawer.Screen>
//         <Drawer.Screen name='user' component={UserScreen} options={{
//           drawerIcon:({color,size})=><Ionicons name='person' color={color} size={size}></Ionicons>
//         }}></Drawer.Screen>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
