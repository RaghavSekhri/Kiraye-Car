import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {
  render() {
    return (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to='/'
    >
      HomePage
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Login"
    >
      Login
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/SignUp"
    >
      SignUp
    </NavLink>
  </nav>
    )
  }
}
