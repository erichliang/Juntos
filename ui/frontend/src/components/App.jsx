import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './Start/Start';

import classes from './App.scss';
import CreatePortrait from './CreatePortrait/CreatePortrait';
import AddMyself from './AddMyself/AddMyself';
import Upload from './Upload/Upload';
import Results from './Results/Results';

export default function App() {
  return (
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route path={'/'} exact component={Start} />
            <Route path={'/portrait'} exact component={CreatePortrait} />
            <Route path={'/add-myself'} exact component={AddMyself} />
            <Route path={'/upload'} exact component={Upload} />
            <Route path={'/portrait/:photoId?'} exact component={CreatePortrait} />
            <Route path={'/results'} exact component={Results} />
          </Switch>
        </Router>
      </div>
  )
}