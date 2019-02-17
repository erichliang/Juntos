import React from 'react';

import classes from './Choice.scss';

export default function Choice({onClick, feature, choice}) {
  return (
      <div className={classes.choiceContainer} onClick={() => onClick(feature, choice)}>
        <img src={choice.image} alt={choice.name}/>
      </div>
  )
}