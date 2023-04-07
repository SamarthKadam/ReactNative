import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput"
import { useContext } from "react"
import { ExpenseContext } from "../store/expense-context"
import { getDateMinusDays } from "../utils/getDate";

export default function RecentExpense() {

  const expenseCtx=useContext(ExpenseContext);

  const recentExpense=expenseCtx.expenses.filter((expense)=>{
    
    const today=new Date();
    const date7DaysAgo= getDateMinusDays(today,7);

    return expense.date>date7DaysAgo && expense.date<=today
  })

  return (
    <ExpensesOutput expenses={recentExpense} expensesPeriod="Last 7 Days"  fallBackText="No expenses registered for last 7 days" ></ExpensesOutput>
  )
}
