import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpense from './screens/AllExpense';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/UI/IconButton';
import ExpenseContextProvider from './store/expense-context';

const BottomTabs=createBottomTabNavigator();
const Stack=createNativeStackNavigator();


function ExpenseOverview()
{
  return <BottomTabs.Navigator screenOptions={({navigation})=>({
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,
    headerRight:({tintColor})=><IconButton icon="add" size={24} color={tintColor} onPress={()=>{navigation.navigate('ManageExpense')}}></IconButton>
  })}>
    <BottomTabs.Screen name='RecentExpenses' options={{title:'Recent Expenses',tabBarLabel:'Recent',tabBarIcon:({size,color})=><Ionicons name='hourglass' size={size} color={color}></Ionicons>}} component={RecentExpense}></BottomTabs.Screen>
    <BottomTabs.Screen name='AllExpenses' options={{title:'All Expenses',tabBarLabel:'All Expense',tabBarIcon:({size,color})=><Ionicons name='calendar' size={size} color={color}></Ionicons>}} component={AllExpense}></BottomTabs.Screen>
  </BottomTabs.Navigator>
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
            headerTintColor:'white'
          }
        }>
          <Stack.Screen name='ExpensesOverview' options={{headerShown:false}} component={ExpenseOverview}></Stack.Screen>
          <Stack.Screen options={{presentation:'modal'}} name='ManageExpense' component={ManageExpense}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

