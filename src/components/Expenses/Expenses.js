import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const exp = props.items
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter/>
                <ExpenseItem date={exp[0].date} title={exp[0].title} amount={exp[0].amount}/>
                <ExpenseItem date={exp[1].date} title={exp[1].title} amount={exp[1].amount}/>
                <ExpenseItem date={exp[2].date} title={exp[2].title} amount={exp[2].amount}/>
                <ExpenseItem date={exp[3].date} title={exp[3].title} amount={exp[3].amount}/>
            </Card>
        </div>
    );
}

export default Expenses;