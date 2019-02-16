import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './Start/Start';

import classes from './App.scss';

export default function App() {
  return (
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route path={'/'} exact component={Start} />
          </Switch>
        </Router>
      </div>
  )
}