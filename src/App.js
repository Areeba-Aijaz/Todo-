import React , { useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from './components/NewExpense/NewExpenses';

// array of boject yani objext ka array.
// ye h data. jo khud se code kr rk rkha h........ or ye expenses.js me ja rha h. use hora h.
let DUMY_EXPENSE = [
    {
        id : 'e1',
        title : 'House rent',
        amount : '12000',
        date : new Date(2023 , 1 , 12)
    },
    {
        id : 'e2',
        title : 'car rent',
        amount : '1000',
        date : new Date(2023 , 1 , 22)
    },
    {
        id : 'e3',
        title : 'Hall rent',
        amount : '10000',
        date : new Date(2023 , 6 , 16)
    },
    {
        id : 'e4',
        title : 'Ven rent',
        amount : '1000',
        date : new Date(2023 , 9 , 19)
    }
];
const App = () => {


//     //array destructuring... usestate array return krta h
//     // ek variable (nm apni mrxi se) 2 function (nm apni mrxi se) or = useState k bd bracket ismy jo b value pas hngi usko jo array dia h us variable se call krngy
//     // jo value chng hngi us k ly usesttate use hoga 
    const [UpdatedExpenses,setUpdatedExpenses] = useState(DUMY_EXPENSE);

// ye expense wo h jo hmny data get kia h
    const addExpenseHandler = (geterexpense) => {
        let updatedExpense = [geterexpense , ...UpdatedExpenses];
        setUpdatedExpenses(updatedExpense);
    };
    // console.log(UpdatedExpenses);
    // console.log(setUpdatedExpenses);
    
    
    
    return(
        // green me component h or usky bad variable bnya h or usmy jo b data h wo pass kia h props ki madad se.... or jaha rec hoga waha props or dot or uski [property] likhngy
        <div>
            <NewExpenses onAddExpense={addExpenseHandler} />
            <Expenses item={UpdatedExpenses} />
        </div>
    );
 }
export default App;