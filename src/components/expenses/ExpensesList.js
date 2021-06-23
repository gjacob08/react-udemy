import React from 'react';

import ExpenseItem from './ExpenseItem';

import '../css/ExpensesList.css';

const ExpensesList = (props) => {
  //It's easier to put the logic here than in the return method
  //to keep JSX section leaner
  if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          // Add key prop to add a unique id for each array
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
