import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
    const [filterVal, setFilterYear] = useState('');
    const ddChangeHandler = (event) => {
        setFilterYear(event.target.value)
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={ddChangeHandler}>
                    <option value="-1">select year</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;