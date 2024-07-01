import React from 'react';
import { useState } from 'react';
import './ExpenseForm.css';
// import NewExpenses from './NewExpenses';

const ExpenseForm = (props) => {

    const [TitleValue,SetEnteredTitle] = useState('');
    const [AmountValue,SetEnteredAmount] = useState('');
    const [DateValue ,SetEnteredDate] = useState('');   

    const TitleEnteredValue = (event) => {
        SetEnteredTitle(event.target.value)
    };    
    const AmountEnteredValue = (event) => {
        SetEnteredAmount(event.target.value)
    };    
    const DateEnteredValue = (event) => {
        SetEnteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        //pora pg refresh na ho is ly ye func lgta h
        event.preventDefault();

        const expenseDate = {
            Title: TitleValue ,
            Amount: AmountValue,
            Date: new Date( DateValue )
        }

        props.onSaveExpenseData(expenseDate);
        //  console.log(expenseDate);
// ye is lye k jb data add kren thn enter kren to data clean hojye
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate ('');
    };

    return (
        <form onSubmit={ submitHandler }>
            <div  className="new-expense__controls">
                <div  className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={TitleValue} onChange={ TitleEnteredValue} />
                </div> 
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={AmountValue} min="0.01" step="0.01" onChange={AmountEnteredValue} />
                </div> 
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={DateValue} onChange={DateEnteredValue} min='2019-01-01' max='2024-12-31' />
                </div>
          </div> 

          <div className="new-expense__action" >
            <button type="submit">Add Expense</button>
          </div>
        </form>
        
    )
}


export default ExpenseForm;