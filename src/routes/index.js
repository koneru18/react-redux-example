import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from '../containers/LoginContainer';
import HomePage from '../components/home/Homepage';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
);

export default Routes;