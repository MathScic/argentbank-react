import React from "react";
import { NavLink } from "react-router-dom";
import "../style/style.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="home-container">
        <NavLink to="/">
          <img src="./img/argentBankLogo.png" alt="" />
        </NavLink>
      </div>

      <div className="sign-in-container">
        <NavLink to="sign-in">
          <li className="">
            <i className="fa fa-user-circle">Sign In</i>
          </li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
