import React from 'react'
import './ExpenseDate.css';
import Card from '../UI/Card'

const ExpenseDate = (props) => {
 let month = props.date.toLocaleString('en-US' , {month: 'long'}); 
  let year = props.date.getFullYear();
  let  day = props.date.toLocaleString('en-US' , {day: '2-digit'}) ;
      
        // console.log(props)
        // console.log(month)
        // console.log(year)
        // console.log(day)


    //is se ye b seekha k data manuplate
    //b kr skty hen k props ko varable me save krwa k
    //manuplate krdo
  return(
    <Card className="expense-date">
        <div className="expense-date__month">{ month }</div>
        <div className="expense-date__year">{ year }</div>
        <div className="expense-date__day">{ day }</div>
    </Card> 
    );
  }
 




export default ExpenseDate;