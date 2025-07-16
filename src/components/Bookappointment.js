import React, { useState } from "react";
import styles from "./Styles.module.css";
import axios from "axios";
import homelogo from "./homelogo.png";
//import { useNavigate } from "react-router-dom";
const Bookappointment = () => {
  const [patientName, setpatientName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");

  //const navigate = useNavigate();

  /*const resetInputControls = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
  };*/

  const addAppointment = (e) => {
    e.preventDefault();
    if (!patientName || !email || !mobile || !date || !treatment) {
      alert("⚠️ Please fill in all fields");
      return;
    }
    axios
      .post("http://localhost:4000/appointment", {
        patientName,
        email,
        mobile,
        date,
        treatment,
      })
      .then((res) => {
        alert("Appointment booked successful");
        setpatientName("");
        setEmail("");
        setMobile("");
        setTreatment("");
        setDate("");
      })
      .catch((err) => {
        alert("Better luck next time");
      });
  };
  return (
    <>
      <section className={styles.bread}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1>Book Appointment</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="my-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <form className={styles.bx_shadow} onSubmit={addAppointment}>
                <input
                  type="text"
                  name="patientName"
                  value={patientName}
                  onChange={(e) => setpatientName(e.target.value)}
                  placeholder="Your Name"
                  className="form-control mb-3"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="form-control mb-3"
                />
                <input
                  type="number"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile Number"
                  className="form-control mb-3"
                />
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="form-control mb-3"
                />
                <input
                  type="text"
                  name="treatment"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  placeholder="Treatment Name"
                  className="form-control mb-3"
                />
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-lg rounded-pill px-5 "
                >
                  Book Now
                </button>
              </form>
            </div>
            <div className="col-lg-6  ">
              <a className="" href="/">
                <img
                  src={homelogo}
                  alt=" Surgy Life Logo"
                  className="d-inline-block align-top"
                  style={{ height: "350px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookappointment;
