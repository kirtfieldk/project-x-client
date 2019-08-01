import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className={window.scrollY > 30 ? "col-12  shadow fixed-top " : "col-12 "}>
      <div className="row">
        <div className="col-3  p-2 text-danger link">
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
            className="magenta"
          >
            Home
          </NavLink>
        </div>
        <div className="col-3 p-2 link">
          <NavLink
            to="/about"
            className="magenta"
            activeClassName="active-link"
          >
            About
          </NavLink>
        </div>
        <div className="col-3 p-2 link">
          <NavLink to="/post" className="magenta" activeClassName="active-link">
            Post
          </NavLink>
        </div>
        <div className="col-3 p-2 link ">
          <NavLink
            to="/contact"
            className="magenta"
            activeClassName="active-link"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
