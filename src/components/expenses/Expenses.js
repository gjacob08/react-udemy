import React, { useState } from 'react';

import '../css/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../expense-filter/ExpenseFilter';
import Card from '../layout/Card';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
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
          initialYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
