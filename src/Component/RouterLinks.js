import React, { Component } from "react";
import { Link } from "react-router-dom";

const RouteLink = (props) =>{
    return (
        <div className="menulink">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={'/Contact'}>Contact Us</Link>
            </li>
            <li>
              <Link to={'/Login'}>Login</Link>
            </li>
            <li>
              <Link to={'/Signup'}>Sign up</Link>
            </li>
            <li>
              <Link to={'/Myaccount'}>My Account</Link>
            </li>
            <li>
              <Link to={'/Practice'}>Practice</Link>
            </li>
          </ul>   
        </div>
      );
}

export default RouteLink;
