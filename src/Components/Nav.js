import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  const [nav, setNav] = useState(false);
  window.onscroll = () => {
    var scrollTop = window.pageYOffset;
    scrollTop > 110 ? setNav(true) : setNav(false);
  };
  return (
    <div className="fixed-top">
      <div className={nav ? "row nav-yellow shadow" : "row nav-white "}>
        <div className="col-3  p-2 text-danger ">
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
            className="magenta"
          >
            Home
          </NavLink>
        </div>
        <div className="col-3 p-2 ">
          <NavLink
            to="/about"
            className="magenta"
            activeClassName="active-link"
          >
            About
          </NavLink>
        </div>
        <div className="col-3 p-2 ">
          <NavLink to="/post" className="magenta" activeClassName="active-link">
            Post
          </NavLink>
        </div>
        <div className="col-3 p-2  ">
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
