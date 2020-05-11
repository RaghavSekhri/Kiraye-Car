import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from '../src/components/HomePage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends React.Component{

  render()
  {

    let val=0

    if(window.location.pathname==='/signup')
    {
      val = 1
    }

    return (
      <div className="App">
        <Router>
        <Navbar value={val}/>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

