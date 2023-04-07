import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput"
import { ExpenseContext } from "../store/expense-context"
import { useContext } from "react"
export default function AllExpense() {

 const ExpensesCtx=useContext(ExpenseContext);


  return (
    <ExpensesOutput expenses={ExpensesCtx.expenses} expensesPeriod="Total" fallBackText="No registered expenses found"></ExpensesOutput>
  )
}
