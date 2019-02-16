import React from 'react';

import classes from './Button.scss';
import {Link} from 'react-router-dom';

export default function Button({children, ...props}) {
  return (
      <Link className={classes.button} {...props}>
        {children}
      </Link>
  )
}