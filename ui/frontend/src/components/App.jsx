import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './Start/Start';

import classes from './App.scss';
import CreatePortrait from './CreatePortrait/CreatePortrait';
import AddMyself from './AddMyself/AddMyself';

export default function App() {
  return (
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route path={'/'} exact component={Start} />
            <Route path={'/portrait'} exact component={CreatePortrait} />
            <Route path={'/add-myself'} exact component={AddMyself} />
          </Switch>
        </Router>
      </div>
  )
}