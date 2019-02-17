import React from 'react';

import classes from './Button.scss';
import {Link} from 'react-router-dom';

export default function Button({children, onClick, ...props}) {
  if(onClick) {
    return (
        <div className={classes.button} onClick={onClick} {...props}>
          {children}
        </div>
    )
  }

  return (
      <Link className={classes.button} {...props}>
        {children}
      </Link>
  )
}