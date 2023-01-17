import React, { useState, useEffect, useRef } from "react";
import "../css/Nav.css";
import logo from "../img/logo.svg";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [showLinks, setShowLinks] = useState<string>("none");

  const handleButton = () => {
    if (showLinks == "flex") {
      setShowLinks("none");
      console.log(showLinks);
    } else {
      setShowLinks("flex");
      console.log(showLinks);
    }
  };

  return (
    <div>
      <nav className="nav-mobile">
        <img className="nav-logo" src={logo} alt="logo"></img>
        <div
          className="nav-button align-right"
          onClick={() => {
            handleButton();
          }}
        >
          <FaBars />
        </div>
      </nav>
      <>
        <div className="nav-mobile-box" style={{ display: `${showLinks}` }}>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#resources">Resources</a>
          <div className="underline-inbox"></div>
          <a href="/#login">Login</a>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </div>
      </>

      <nav className="nav-container">
        <div className="nav-center">
          <div className="nav-header">
            <img className="nav-logo" src={logo} alt="logo"></img>
            <div className="links-container">
              <div className="links">
                <div>
                  <a href="/#features">Features</a>
                  <a href="/#pricing">Pricing</a>
                  <a href="/#resources">Resources</a>
                </div>
                <div className="align-right">
                  <a href="/#login">Login</a>
                  <button className="sign-up-btn">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
