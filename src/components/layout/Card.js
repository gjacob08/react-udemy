import React from 'react';

import '../css/Card.css';

const Card = (props) => {
  //props.children is a reserve name for react. It allows you to create wrapper component
  //use the variable below to be able to use className for custom components
  const classes = 'card ' + props.className;
  return(
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default Card;