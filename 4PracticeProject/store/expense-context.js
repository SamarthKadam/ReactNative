import { createContext, useReducer } from "react";

const DUMMY_EXPENSES=[
    {
      id:'e1',
      description:'A pair of shoes',
      amount:59.99,
      date:new Date('2023-04-02')
    },
    {
      id:'e2',
      description:'A pair of Trousers',
      amount:89.99,
      date:new Date('2023-04-03')
    },
    {
      id:'e3',
      description:'Some bananas',
      amount:5.99,
      date:new Date('2023-04-01')
    },
    {
      id:'45',
      description:'Some Book',
      amount:14.99,
      date:new Date('2023-02-19')
    },
    {
      id:'e5',
      description:'Another Book',
      amount:18.99,
      date:new Date('2023-02-10')
    }
  ]

export const ExpenseContext=createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description,amount,date})=>{}
});


function expenseReducer(state,action)
{
    switch(action.type)
    {
        case 'ADD':
            const id=new Date().toString()+Math.random().toString();
            return [{...action.payload,id:id},...state]
        case 'UPDATE':
            const updatableExpenseIndex=state.findIndex((expense)=>expense.id===action.payload.id)
            const updatableExpense=state[updatableExpenseIndex];
            const updatedItem={...updatableExpense,...action.payload.data};
            const updatedExpense=[...state];
            updatedExpense[updatableExpenseIndex]=updatedItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter((expense)=>expense.id!=action.payload)
        default:
            return state
    }

}


function ExpenseContextProvider({children})
{

    const [expenseState,dispatch]=useReducer(expenseReducer,DUMMY_EXPENSES)

    function addExpense(expenseData)
    {
        dispatch({type:'ADD',payload:expenseData})
    }

    function deleteExpense(id)
    {
        dispatch({type:'DELETE',payload:id})
    }

    function updateExpense(id,expenseData)
    {
        dispatch({type:'UPDATE',payload:{id:id,data:expenseData}})
    }


    const value={
      expenses:expenseState,
      addExpense:addExpense,
      deleteExpense:deleteExpense,
      updateExpense:updateExpense
    }

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpenseContextProvider;