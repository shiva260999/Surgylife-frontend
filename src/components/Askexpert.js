import React, { useState } from "react";
import axios from "axios";
import styles from "./Styles.module.css";

const AskExpert = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [mobile, setMobile] = useState("");

  const submitQuery = (e) => {
    e.preventDefault();
    axios
      .post("https://surgylife-backend.onrender.com/askexpert", {
        name,
        email,
        mobile,
        question,
      })
      .then(() => {
        alert("question posted successful");
        setName("");
        setEmail("");
        setMobile("");
        setQuestion("");
      })
      .catch((err) => {
        alert("Better luck next time");
      });
  };

  return (
    <>
      <section className={styles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Ask Expert</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <form
              onSubmit={submitQuery}
              className={styles.bx_shadow}
              encType="multipart/form-data"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="form-control mb-3"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <textarea
                placeholder="Your Question"
                className="form-control mb-3"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-outline-primary btn-lg rounded-pill px-5 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskExpert;
