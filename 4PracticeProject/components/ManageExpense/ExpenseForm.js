import { View,StyleSheet,Text,Alert } from "react-native"
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({onCancel,onSubmit,submitButtonLabel,defaultValues})
{
    const[inputs,setInputs]=useState({
        amount:{ value:defaultValues?defaultValues.amount.toString():'',isValid:true},
        date:{value:defaultValues?defaultValues.date.toString().slice(0,10):'',isValid:true},
        description:{value:defaultValues?defaultValues.description:'',isValid:true}
    })

    function inputChangeHandler(inputIdentifier,enteredValue)
    {
        setInputs((curInputValues)=>{
            return {
                ...curInputValues,
                [inputIdentifier]:{value:enteredValue,isValid:true}
            }
        })
    }

    function submitHandler()
    {
        const expenseData={
            amount:+inputs.amount.value,
            date:new Date(inputs.date.value),
            description:inputs.description.value
        }

       
        const AmountIsValid= !isNaN(expenseData.amount)&&expenseData.amount>0;
        const dateisValid=expenseData.date.toString()!=='Invalid Date';
        const descriptionIsValid=expenseData.description.trim().length>0



        if(!AmountIsValid || !dateisValid || !descriptionIsValid)
        {
            // Alert.alert('Invalid Input','Please check your input values');

            setInputs((curInputs)=>{
                return {
                    amount:{value:curInputs.amount.value,isValid:AmountIsValid},
                    date:{value:curInputs.date.value,isValid:dateisValid},
                    description:{value:curInputs.description.value,isValid:descriptionIsValid}
                }
            })
            return;
        }


        onSubmit(expenseData);

    }

    const formIsInValid=!inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid


    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
        <Input invalid={!inputs.amount.isValid} label="Amount" textInputConfig={{
            keyboardType:'decimal-pad',
            onChangeText:inputChangeHandler.bind(this,'amount'),
            value:inputs.amount.value
        }}></Input>
        <Input invalid={!inputs.date.isValid} label="Date" textInputConfig={{
            placeholder:'YYYY-MM-DD',
            maxLength:10,
            onChangeText:inputChangeHandler.bind(this,'date'),
            value:inputs.date.value
        }}></Input>
        </View>
        <Input invalid={!inputs.description.isValid} label="Description" textInputConfig={{
            multiline:true,
           // autoCapitalize:'none',
           // autoCorrect:false/// default is true
           onChangeText:inputChangeHandler.bind(this,'description'),
            value:inputs.description.value
        }}></Input>
        { formIsInValid && <Text style={styles.errorText}>Invalid input Values - please check your entered data</Text>}
         <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
}

export default ExpenseForm;

const styles=StyleSheet.create({
    inputRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowInput:{
        flex:1
    },
    form:{
        marginTop:80
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign:'center'
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      button:{
        minWidth:120,
        marginHorizontal:8,
    
      },
      errorText:{
        textAlign:'center',
        color:GlobalStyles.colors.error500,
        margin:8
      }
})