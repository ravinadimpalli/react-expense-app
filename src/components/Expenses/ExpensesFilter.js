import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const ddChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.filterYear} onChange={ddChangeHandler}>
                    <option value="-1">select year</option>
                    <option value="2021">2021</option>
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