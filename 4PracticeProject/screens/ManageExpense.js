import { useLayoutEffect } from "react";
import {View,Text, StyleSheet } from "react-native"
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { ExpenseContext } from "../store/expense-context";

export default function ManageExpense({route,navigation}) {

  const expenseCtx=useContext(ExpenseContext);

  const editedExpenseId=route.params?.expenseId;

  const isEditing=!!editedExpenseId


  function deleteExpenseHandler()
  {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler()
  {
    navigation.goBack();
  }

  function confirmHandler()
  {
    if(isEditing)
    {
      expenseCtx.updateExpense(editedExpenseId,{description:'Test!!',amount:19.99,date:new Date('2023-04-06')})
    }
    else{
      expenseCtx.addExpense({description:'Test',amount:29.99,date:new Date('2023-04-06')})
    }

    navigation.goBack();
  }


  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing?'Edit Expense':'Add Expense'
    })
  },[navigation,isEditing])


  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing?'Update':'Add'}</Button>
      </View>
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