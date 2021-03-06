import React, { Component } from "react";
import { FaUsers} from "react-icons/fa";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
           <FaUsers className="mr-1"/>  Meeting Log
          </a>
          <div className="navbar-nav ml-auto">
            {user && (
              <a className="nav-item nav-link" href="/meeting">
                Meetings
              </a>
            )}
            {!user && (
              <a className="nav-item nav-link" href="/login">
                login
              </a>
            )}
            {!user && (
              <a className="nav-item nav-link" href="/register">
                Register
              </a>
            )}
            {user && (
              <a className="nav-item nav-link" href="/login">
                logout
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
