import React from "react";
import "./Home.css";

import homelogo from "./homelogo.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home text-black text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Your Health, Our Priority</h1>
              <p className="lead">
                Providing quality healthcare products and services at your
                doorstep.
              </p>
              <NavLink
                to="/bookappointment"
                className=" btn btn-success btn-lg mt-3 shadow-lg"
              >
                Book Appointment
              </NavLink>
            </div>
            <div className="col-lg-6">
              <a className="" href="/">
                <img
                  src={homelogo}
                  alt=" Surgy Life Logo"
                  className="d-inline-block align-top"
                  style={{ height: "300px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 my-4">
              <h3>Welcome to Surgy Life</h3>
              <p>
                Surgylife is a comprehensive health care platform which connects
                patients requiring medical or surgical care to our team of
                physicians and surgeons across Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
