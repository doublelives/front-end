import React from 'react';
import logo from './logo.svg';
import './App.css';
import routeConfig from './config/routes'
import { Switch, Route, withRouter, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Link to="/Home">Home</Link>
    <Link to="/User">User</Link>
    <Switch>
      {
        routeConfig.map((route, index) => {
          return <Route key = {index} {...route} />
        })
      }
    </Switch>
    </>
  );
}

export default withRouter(App);
