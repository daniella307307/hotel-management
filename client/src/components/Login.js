import React from "react";

function Login() {
  return (
    <div>
      <div className="container">
        <h1 className="title-sign">Login</h1>
        <form action="submit" method="POST">
          <input type="Email" name="email" placeholder="Enter Your Email" />

          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
          />

          <p className="p2">
            Don't have an account?<a href="/signup">Signup</a>
          </p>
          <button className="btnn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
