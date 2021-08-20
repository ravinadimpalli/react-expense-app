import "./ExpenseForm.css";
import { useState } from "react";

const NewExpenseForm = (props) => {
    const [titleChanged, setTitleChanged]   = useState('');
    const [amountChanged, setAmountChanged] = useState('');
    const [dateChanged, setDateChanged]     = useState('');
    
    // const [data, updateData] = useState({
    //     titleChanged : '',
    //     amountChanged: '',
    //     dateChanged  : ''
    // })
    const submitHandler = (event) => {
        const expenseData = {
            title : titleChanged,
            amount: amountChanged,
            date  : new Date(dateChanged)
        } 
        setTitleChanged('')
        setAmountChanged('')
        setDateChanged('')
        props.onAddExpense(expenseData);
        event.preventDefault();
    }
    const changeTitleHandler = (event) => {
        setTitleChanged(event.target.value)
        // updateData({
        //     ...data,
        //     titleChanged: event.target.value
        // });
        // updateData((prevState)=>{
        //     return { ...prevState, titleChanged : event.target.value }
        // });
    }
    const changeAmountHandler = (event) => {
        setAmountChanged(event.target.value);
        // updateData({
        //     ...data,
        //     amountChanged: event.target.value
        // });

        // updateData((prevState)=>{
        //    return { ...prevState, amountChanged : event.target.value }
        // });
    }
    const changeDateHandler =(event) => {
        setDateChanged(event.target.value);
        // updateData({
        //     ...data,
        //     dateChanged: event.target.value
        // });

        // updateData((prevState)=>{
        //     return { ...prevState, dateChanged : event.target.value }
        // });
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Titel</label>
                <input type="text" value={titleChanged} onChange={changeTitleHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={amountChanged} onChange={changeAmountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={dateChanged} onChange={changeDateHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </form>
    );
};

export default NewExpenseForm;