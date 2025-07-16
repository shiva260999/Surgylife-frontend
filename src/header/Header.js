import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Header.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt=" Surgy Life Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto" style={{ letterSpacing: "1px" }}>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item   me-3">
                <NavLink className="nav-link" to="/aboutus">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item   me-3">
                <NavLink className="nav-link" to="/treatments">
                  TREATMENTS
                </NavLink>
              </li>
              <li className="nav-item  me-3">
                <NavLink className="nav-link" to="/bookappointment">
                  BOOK appointment
                </NavLink>
              </li>
              <li className="nav-item  me-3">
                <NavLink className="nav-link" to="/askexpert">
                  ASK EXPERT
                </NavLink>
              </li>
              <li className="nav-item  me-3">
                <NavLink className="nav-link" to="/contactus">
                  CONTACT US
                </NavLink>
              </li>
              <li>
                <NavLink className="btn btn-outline-primary btn-sm" to="/admin">
                  Admin Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
