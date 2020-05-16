import React from 'react';
import './App.css';
import HomePage from '../src/components/HomePage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import axios from 'axios';
export default class App extends React.Component{

  render()
  {
    console.log("hello")
    var token = localStorage.getItem('jwtToken');

        if (token) {
            // Apply to every request
            axios.defaults.headers.common['Authorization'] = token;
          } else {
            // Delete auth header
            delete axios.defaults.headers.common['Authorization'];
          }

    return (
      <div className="App">
        <Router>
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

