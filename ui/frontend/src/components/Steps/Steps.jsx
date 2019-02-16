import React from 'react';
import cx from 'classnames';
import classes from './Steps.scss';

export default function Steps({count, current, onStepClick}) {
  return (
    <div className={classes.steps}>
      {[...Array(count).keys()].map(i => (
          <>
            {i !== 0 && <div key={`l${i}`} className={cx(classes.line, {[classes.active]: i <= current})} onClick={() => onStepClick(i)} />}
            <div key={`d${i}`} className={cx(classes.dot, {[classes.active]: i <= current})} onClick={() => onStepClick(i)} />
          </>
      ))}
    </div>
  )
}
