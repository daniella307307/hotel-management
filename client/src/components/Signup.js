import React, { Component } from "react";

export class Signup extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title-sign">Sign Up</h1>
          <form action="submit" method="POST">
            <input
              type="text"
              name="fname"
              placeholder="Enter Your First Name"
            />
            <input
              type="text"
              name="lname"
              placeholder="Enter Your Last Name"
            />
            <input type="Email" name="email" placeholder="Enter Your Email" />
            <input
              type="text"
              name="username"
              placeholder="Enter Your username"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your password"
            />
            <p className="p1">OR</p>
            <div className="socio-media">
              <ul>
                <li>Google</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <p className="p2">
              Already have an account?<a href="/login">Login</a>
            </p>
            <a href="/rooms"><button className="btnn">Sign Up</button></a>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
