import React from 'react';

import classes from './Start.scss';
import Button from '../Button/Button';

export function Or() {
  return <div className={classes.or}>OR</div>
}

export default function Start() {
  return (
      <div className={classes.centerWrapper}>
        <div className={classes.choicesContainer}>
          <div className={classes.choice}>
            <Button to={'/portrait'}>
              Create a portrait
            </Button>
          </div>
          <Or />
          <div className={classes.choice}>
            <Button to={'/upload'}>
              Upload a picture
            </Button>
          </div>
          <Or />
          <div className={classes.choice}>
            <Button to={'/add-myself'}>
              Add myself to the database
            </Button>
          </div>
        </div>
      </div>
  )
}
