import React, { useState } from 'react';

import '../css/NewExpenseForm.css';

const ExpenseForm = (props) => {
  //use deconstructuring again to get set the value into array that we can fetch
  //initialize useState with an open string even if the value is a number
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //to use only one useState, we have to call the object and group them
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  //don't forget to add the event object as param
  //react will make sure that we get this event object when the change event occurs
  const titleUpdateHandler = (event) => {
    //console log to see the target -> value of the text field
    // console.log(event.target.value);
    //this will store the value to our state
    setEnteredTitle(event.target.value);
    //the problem in the approach on the object below is your 
    //depending on your previous state for updating the state
    //whenever you update state and you depend to the previous state like this one
    //you should not do the one below this comment
    // setUserInput({
    //   //to make sure that the other data does not get lost since we're using one useState object
    //   //we will to use the spread operator
    //   //it will pull out all the key value pairs and adds it to the new object (enteredTitle)
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //the one below is the right way, call it and a pass a function
    //the reason why is because React schedules the state and does not call them instantly
    //this approach takes the latest state
    //memorize this "Whenever your state update depends on the previous state, use the function syntax below"

    //prevState param will receive the previous state
    // setUserInput((prevState) => {
    //   //return the new state snapshot
    //   //the prevState object with spread operator and override it with the new target value
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   }
    // });
  };

  const amountUpdateHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  };

  const dateUpdateHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    //use preventDefault to avoid reloading the browser after hitting submit
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //since we're already passing the function onSaveExpenseData from NewExpense component
    //we can now use props.onSaveExpenseData and pass the data from
    //expenseData as an argument
    props.onSaveExpenseData(expenseData);
    //resetting the form with two-way binding after submitting
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          {/* To add two-way binding, add value attrib and enter the initial data as value */}
          <input
            type='text'
            value={enteredTitle}
            onChange={titleUpdateHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountUpdateHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateUpdateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
      <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
