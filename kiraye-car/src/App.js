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

    var token = localStorage.getItem('jwtToken');
    let auth;
    if (token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = token;
        auth=true;
      } else {
        // Delete auth header
        auth=false;
        delete axios.defaults.headers.common['Authorization'];
      }

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={({location})=>
              <HomePage auth={location.auth?location.auth:auth} />
            } />
            <Route exact path="/login" render={()=>
              <Login auth={auth} />
            } />
            <Route exact path="/signup" render={()=>
              <SignUp auth={auth} />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

