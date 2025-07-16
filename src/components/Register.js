import React, { useState } from "react";
import styles from "./Styles.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const resetInputControls = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
  };

  const adminRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://surgylife-backend.onrender.com", {
        name,
        email,
        password,
        mobile,
        address,
      })
      .then((res) => {
        alert("Registration successful");
        navigate("/admin");
      })
      .catch((err) => {
        alert("Better luck next time");
      });
  };
  return (
    <section className="my-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-auto">
            <form className={styles.bx_shadow} onSubmit={adminRegister}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control mb-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control mb-3"
                />
                <div className="mb-3 d-flex justify-content-end">
                  <button
                    type="button" // Prevents accidental form submission
                    className="btn btn-danger me-2"
                    onClick={resetInputControls}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
