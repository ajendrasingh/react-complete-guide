import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    //Updating with multiple states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //Updating using single state, but in this case you have to update all the key values everytime.
    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
 */
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);    //Updating with multiple states

        //Updating the values with single state, have to update all the key values as if not
        //then on updating the object React will loose the other values.

        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        }) */

        //Above 23-26 commented because whenever we are updating any state that is dependent on our
        //previous state then it is not appropriate way, instead do as below code as it will get previous
        //state snapshot.

        /* setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        }); */
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); */

        /* setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        }); */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); */

        /* setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        }); */
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="219-01-01" step="2013-01-01" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit"> Add Expense </button>
        </div>
    </form>
}

export default ExpenseForm