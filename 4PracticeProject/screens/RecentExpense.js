import ExpensesOutput from "../components/ExpensesOutput"
import { useContext, useEffect, useState } from "react"
import { ExpenseContext } from "../store/expense-context"
import { getDateMinusDays } from "../utils/getDate";
import { fetchExpenses } from "../utils/https";
import ErrorOverlay from "../utils/ErrorOverlay";
import LoadingOverLay from "../utils/LoadingOverLay";
export default function RecentExpense() {

  const[isFetching,setIsFetching]=useState(true);
  const[error,setError]=useState(false);

  const expenseCtx=useContext(ExpenseContext);

  useEffect(()=>{

   async function getExpenses()
    {
      setIsFetching(true);
      try{
    const expenses= await fetchExpenses();
    expenseCtx.setExpenses(expenses);
      }
      catch(error)
      {
        setError('Could not fetch expenses !')
      }
    setIsFetching(false);
      
    }
    getExpenses();

  },[])

  function errorHandler()
  {
    setError(null);
  }

  if(error&& !isFetching)
  {
    return <ErrorOverlay message={error} onConfirm={errorHandler}></ErrorOverlay>
  }

  if(isFetching)
  {
    return <LoadingOverLay></LoadingOverLay>
  }

  const recentExpense=expenseCtx.expenses.filter((expense)=>{
    
    const today=new Date();
    const date7DaysAgo= getDateMinusDays(today,7);

    const date1=new Date(expense.date);
    const date2=new Date(date7DaysAgo);


    return date1>date2 && date1<=new Date(today)
  })

  return (
    <ExpensesOutput expenses={recentExpense} expensesPeriod="Last 7 Days"  fallBackText="No expenses registered for last 7 days" ></ExpensesOutput>
  )
}
