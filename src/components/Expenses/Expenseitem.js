import React from 'react';
import './Expenseitem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//jese hi function bnao usi ym export b krna h wrna agr bhool gye to error ayega
// React me curly braket lga k variable likh skty hen javascript me ${} aese likhty thy
const ExpenseItem = (props) => {
    //state bydefault ek value mngta h.
    // or return me ye ek variable or ek function return krta h
    // title = variable h , or setTitle = function h . hm kch b nam de skty hen
   
    

    //ye ExpenseDate file  se component import kia h 2 line bd
    //component k andr component h. card k bd ExpenseDate
    return( 
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
             <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">${props.amount}</div>
             </div>
        </Card>
    );
}
export default ExpenseItem;
