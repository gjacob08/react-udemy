import React, { useState } from 'react';

import '../css/Expenses.css';
import ExpenseFilter from '../expense-filter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import Card from '../layout/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        {/* ExpenseFilter becomes a controlled componenet because the logice resides
            in the parent component which is the Expenses.js

            Stateful vs Stateless components
            stateful- controls state of a component
            stateless- no state management, use only for presenting data
         */}
        <ExpenseFilter
          selected={filteredExpenses}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
        {/* Instead of doing the one below, we put the logic above (has been moved to ExpensesList.js) */}
        {/* Other approach is use ternary expression to check if there's no data */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              // Add key prop to add a unique id for each array
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
