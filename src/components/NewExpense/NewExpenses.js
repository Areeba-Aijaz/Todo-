import React from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
import App from '../../App';

const NewExpenses = (props) => {

  //ye data lene k lye function bnaya h/child me se /child file me ye func bhja j
  const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {

              ...enteredExpenseData,
                id: Math.random().toString()
                  
        }

    props.onAddExpense(expenseData);
    // console.log(expenseData);
  };

  return(
    <div className='new-expense'>
        <ExpenseForm
         onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )


}

export default NewExpenses;
