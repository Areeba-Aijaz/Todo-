import React from 'react';
import './Expenses.css';
import ExpenseItem from './Expenseitem';
import Card from '../UI/Card';


// value add krngy to loop k through add hota rhyga
function Expenses(props){
    return(
        
         <Card className="expenses">
            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                        date = { expense.date}
                        title = { expense.title}
                        amount = {expense.amount}
                        
                        />

                    )
                    
                )
              
            }

         </Card>
    );
    
}

export default Expenses;