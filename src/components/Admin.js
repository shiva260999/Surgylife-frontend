import React, { useState } from "react";
import styles from "./Styles.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const resetInputControls = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const adminLoginCheck = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/login`, { email, password })
      .then((res) => {
        if (res.data === "valid") {
          navigate("/admindashboard");
        } else if (res.data === "no user found") {
          alert("Invalid Username ");
        } else {
          alert("Invalid password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <section className={styles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Admin Login</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className={styles.bx_shadow}>
                <form onSubmit={adminLoginCheck}>
                  <div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control mb-3"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control mb-3"
                    />
                    <div className="mb-3 d-flex justify-content-end">
                      <button
                        className="btn btn-danger me-2"
                        onClick={resetInputControls}
                      >
                        Cancel
                      </button>
                      <input
                        type="submit"
                        className="btn btn-success"
                        value="Admin Login"
                      />
                    </div>
                  </div>
                </form>

                <div className="row">
                  <div className="col-lg-6">
                    <NavLink
                      className="text-decoration-none fw-bold"
                      to="/register"
                    >
                      Register Now
                    </NavLink>
                  </div>
                  <div className="col-lg-6">
                    <NavLink
                      className="text-decoration-none fw-bold"
                      to="/forgotpassword"
                    >
                      Forgot Password
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
