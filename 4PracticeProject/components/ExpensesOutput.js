import { Text,View,StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../constants/styles"
export default function ExpensesOutput({expenses,expensesPeriod,fallBackText}) {

  let content=<Text style={styles.infoText}>{fallBackText}</Text>

  if(expenses.length>0)
  {
    content=<ExpensesList expenses={expenses}></ExpensesList>
  }

  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}></ExpensesSummary>
        {content}
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary700
  },
  infoText:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    marginTop:32,

  }
})