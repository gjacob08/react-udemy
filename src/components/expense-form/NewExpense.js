import React from 'react';

import ExpenseForm from './ExpenseForm';
import '../css/NewExpense.css';

const NewExpense = (props) => {

  //call saveExpenseDataHandler function and pass enteredExpenseData as parameter 
  //to make sure ExpenseForm child component can communicate to parent component
  const saveExpenseDataHandler= (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  };

  return(
    <div className="new-expense">
      {/* use on for naming convention if it's a function expecting an event */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense
