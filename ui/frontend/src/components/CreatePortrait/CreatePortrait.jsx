import React from 'react';

import classes from './CreatePortrait.scss';
import PortraitWizard from '../PortraitWizard/PortraitWizard';

export default function CreatePortrait() {
  return (
      <div className={classes.container}>
        <div className={classes.column}>
          Left
        </div>
        <div className={classes.separator} />
        <div className={classes.column}>
           <PortraitWizard />
        </div>
      </div>
  )
}
