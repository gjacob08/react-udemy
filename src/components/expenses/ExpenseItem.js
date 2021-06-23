//we call useState hook to be able to update the state of objects
//react hooks start with the word use
import React from 'react';

import '../css/ExpenseItem.css';
import Card from '../layout/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  //React hooks should be called directly inside the component function
  //use destructuring to store array since useState store the variables in array
  //useState hook always return 2 array, the default value and the function for updating it
  //using the word SET on the second array makes it clear it will set something if the hook is called
  // const [title, setTitle] = useState(props.title);

  //to access the onClick event in the button
  //we first have to create a function before returning the JSX code
  //for naming convention, attaching the word Handler to the event
  //listener makes it clear that it's waiting for an event and not automatically called
  // const clickHandler = () => {
  //   setTitle('Updated!');

  //   console.log(title);
  // }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
