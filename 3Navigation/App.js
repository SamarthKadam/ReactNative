import CategoriesScreen from "./screen/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Faviorates from "./screen/Faviorates";
import {Ionicons} from '@expo/vector-icons'
import FavoritesContextProvider from "./context/favorites-context";

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();


function DrawerNavigator()
{
  return <Drawer.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#351401'
    },
    headerTintColor:'white',
    sceneContainerStyle:{
      backgroundColor:'#3f2f25'
    },
    drawerContentStyle:{backgroundColor:'#351401'},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'#e4baa1'
  }}>
    <Drawer.Screen name="Categories" options={{
      title:'All Categories',
      drawerIcon:({size,color})=><Ionicons name="list" color={color} size={size}></Ionicons>
    }} component={CategoriesScreen}></Drawer.Screen>
    <Drawer.Screen name="Favorites" component={Faviorates} options={{
      drawerIcon:({size,color})=><Ionicons name="star" color={color} size={size}></Ionicons>
    }}></Drawer.Screen>
  </Drawer.Navigator>
}


export default function App() {
  return (<>
  <StatusBar style="light"></StatusBar>
  <FavoritesContextProvider>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#351401'
    },
    headerTintColor:'white',
    sceneContainerStyle:{
      backgroundColor:'#3f2f25'
    }
  }}>
      <Stack.Screen name="MealsCategories" options={{
        headerShown:false
      }} component={DrawerNavigator}></Stack.Screen>
      <Stack.Screen name="MealsOverview"
       component={MealsOverviewScreen}></Stack.Screen>
       <Stack.Screen options={{title:"About Meal"}} name="MealDetail" component={MealDetailScreen}>
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  </FavoritesContextProvider>
    </>
  );
}

///We can even make use of useNavigation hook
///options={{headerRight:()=><Text>header</Text>}} inside Stack.Screen









// import CategoriesScreen from "./screen/CategoriesScreen";
// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MealsOverviewScreen from "./screen/MealsOverviewScreen";
// import MealDetailScreen from "./screen/MealDetailScreen";
// import { Text } from "react-native";

// const Stack=createNativeStackNavigator();

// export default function App() {
//   return (<>
//   <StatusBar style="light"></StatusBar>
//   <NavigationContainer>
//     <Stack.Navigator screenOptions={{
//       headerStyle:{
//         backgroundColor:'#351401'
//       },
//       headerTintColor:'white',
//       contentStyle:{
//         backgroundColor:'#3f2f25'
//       }
//     }}>
//       <Stack.Screen name="MealsCategories" options={{
//         title:'All Categories',
//       }} component={CategoriesScreen}></Stack.Screen>
//       <Stack.Screen name="MealsOverview"
      //  options={({route,navigation})=>{
      //   const catid=route.params.categoryId
      //   return {title:catid}
      // }}
//        component={MealsOverviewScreen}></Stack.Screen>
//        <Stack.Screen name="MealDetail" component={MealDetailScreen}>
//       </Stack.Screen>
//     </Stack.Navigator>
//   </NavigationContainer>
//     </>
//   );
// }

///We can even make use of useNavigation hook
///options={{headerRight:()=><Text>header</Text>}} inside Stack.Screen

