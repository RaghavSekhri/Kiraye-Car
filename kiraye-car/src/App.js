import React from 'react';
import './App.css';
import HomePage from '../src/components/HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/components/Login'
import SignUp from '../src/components/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
