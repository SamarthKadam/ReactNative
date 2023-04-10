import { useLayoutEffect, useState } from "react";
import {View,Text, StyleSheet } from "react-native"
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense,updateExpense,deleteExpense} from "../utils/https";
import LoadingOverLay from "../utils/LoadingOverLay";
import ErrorOverlay from "../utils/ErrorOverlay";

export default function ManageExpense({route,navigation}) {

  const[isSubmitting,setIsSubmitting]=useState(false);
  const[error,setError]=useState()

  const expenseCtx=useContext(ExpenseContext);

  const editedExpenseId=route.params?.expenseId;

  const isEditing=!!editedExpenseId

  const selectedExpense=expenseCtx.expenses.find(expense=>expense.id===editedExpenseId)


  async function deleteExpenseHandler()
  {
    setIsSubmitting(true);
    try{
    await deleteExpense(editedExpenseId)
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
    }
    catch(err)
    {
      setError('Could not delete expense - please try again later!')
    }
    setIsSubmitting(false);
  }

  function cancelHandler()
  {
    navigation.goBack();
  }

  async function confirmHandler(expenseData)
  {
    setIsSubmitting(true);
    try{
    if(isEditing)
    {
      expenseCtx.updateExpense(editedExpenseId,expenseData)
      await updateExpense(editedExpenseId,expenseData)
    }
    else{
     const id=await storeExpense(expenseData);
      expenseCtx.addExpense({...expenseData,id:id})
    }
  }
  catch(error)
  {
    setError('Could not delete expense - please try again later!')
  }
   setIsSubmitting(false);
    navigation.goBack();
  }


  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing?'Edit Expense':'Add Expense'
    })
  },[navigation,isEditing])


  if(isSubmitting)
  {
    return <LoadingOverLay></LoadingOverLay>
  }

  function errorHandler()
  {
    setError(null);
  }

  if(error && !isSubmitting)
  {
    return <ErrorOverlay message={error} onConfirm={errorHandler}></ErrorOverlay>
  }


  return (
    <View style={styles.container}>
      <ExpenseForm defaultValues={selectedExpense} onSubmit={confirmHandler} submitButtonLabel={isEditing?'Update':'Add'} onCancel={cancelHandler}></ExpenseForm>
      {
        isEditing && (<View style={styles.deleteContainer}><IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}></IconButton></View>)
      }
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary800
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:'center'
  },
  button:{
    minWidth:120,
    marginHorizontal:8,

  }
})