import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div>
          <h1 className="nav-brand">SheyRooms</h1>
        </div>
        <div className="losi">
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
