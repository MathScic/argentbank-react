import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/SignIn.css";
import Footer from "../components/Footer";

const SignIn = () => {
  const history = useNavigate();

  const handleSignIn = () => {
    history.push("/user");
  };

  return (
    <div>
      <NavLink to="/">
        <img
          className="main-logo-signin"
          src="./img/argentBankLogo.png"
          alt=""
        />
      </NavLink>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <NavLink to="/user">
              <a
                href="./user.js
            "
                class="sign-in-button"
              >
                Sign In
              </a>
            </NavLink>

            <button
              class="sign-in-button"
              onClick={() => {
                handleSignIn();
              }}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
