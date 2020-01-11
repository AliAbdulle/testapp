import React, { Component } from "react";

class Login extends Component {
  render() {
    const { user } = this.props;
    return (
     <div className="text-center mt-4">
         <h1 className="text-primaary">Login</h1>
     </div>
    );
  }
}

export default Login;
