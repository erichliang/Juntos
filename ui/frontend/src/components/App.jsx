import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './Start/Start';

import classes from './App.scss';
import CreatePortrait from './CreatePortrait/CreatePortrait';
import Upload from './Upload/Upload';

export default function App() {
  return (
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route path={'/'} exact component={Start} />
            <Route path={'/upload'} exact component={Upload} />
            <Route path={'/portrait'} exact component={CreatePortrait} />
          </Switch>
        </Router>
      </div>
  )
}