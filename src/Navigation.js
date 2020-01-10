import React, { Component } from "react";
import {FaUsers} from 'react-icons/fa';

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="site-nav navbar navbar-expand bg-primary navbar-dark">
          <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Meeting Log
          </a>
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="/meeting">
              Meetings
            </a>
            <a className="nav-item nav-link" href="/login">
              login
            </a>
            <a className="nav-item nav-link" href="/register">
              login
            </a>
            <a className="nav-item nav-link" href="/login">
              logout
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
