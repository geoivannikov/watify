import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './containers/home_page/HomePage';
import Invoice from './containers/invoice/Invoice';
// import PrivateRoute from "./components/PrivateRoute";
import { history } from './helpers';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomePage} />
        {/* <Route path="/invoice" component={Invoice} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
