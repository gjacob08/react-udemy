import React from 'react';

import '../css/ExpenseDate.css';

const ExpenseDate = (props) => {
  //Instead of using variables like the one below
  //we passed the data from app.js via props argument
  //and use the data from the array in app.js as the value
  //sample variable mentioned above
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  //The toLocaleString() method returns a string with a
  //language sensitive representation of this date.

  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
