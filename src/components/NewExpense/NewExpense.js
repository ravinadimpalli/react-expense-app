import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const addExpenseHandler = (expense) => {
        props.onNewExpense({id: Math.random().toString(), ...expense});
    }
    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addExpenseHandler}/>
        </div>
    );
};

export default NewExpense;