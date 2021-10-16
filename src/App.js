import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './containers/home_page/HomePage';
// import PrivateRoute from "./components/PrivateRoute";
import { history } from './helpers';

function App() {
  return (
    <Router history={history}>
      <Switch>
        {/* <PrivateRoute exact path="/" component={HomePage} /> */}
        <Route path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
