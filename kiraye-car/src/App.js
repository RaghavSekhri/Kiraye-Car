import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HomePage from '../src/components/HomePage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import axios from 'axios';
import Support from './components/Support'

export default class App extends React.Component{

  render()
  {

    var token = localStorage.getItem('jwtToken');

        if (token) {
            // Apply to every request
            axios.defaults.headers.common['Authorization'] = token;
          } else {
            // Delete auth header
            delete axios.defaults.headers.common['Authorization'];
          }
    let val=0

    if(window.location.pathname==='/')
      val = 0

    if(window.location.pathname==='/login')
      val = 1

    if(window.location.pathname==='/signup')
      val = 2

    return (
      <div className="App">
        <Router>
        <Navbar value={val}/>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/support" component={Support} />
          </Switch>
        </Router>
      </div>
    );
  }
}

