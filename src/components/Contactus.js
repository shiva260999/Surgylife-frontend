import React from "react";
import styles from "./Styles.module.css";
const Contactus = () => {
  return (
    <>
      <section className={styles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 mb-4">
              <div className="p-4 rounded-4 shadow bg-white">
                <h4 className="fw-semibold mb-4 text-center">
                  Send Us a Message
                </h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Mobile"
                        className="form-control"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="form-control"
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-primary btn-lg rounded-pill px-5"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="p-4 rounded-4 shadow bg-white fs-5 ">
                <h4 className="fw-semibold mb-3 text-center">Get in Touch</h4>
                <p className="text-muted mb-2">
                  <strong>Address:</strong>
                  <br />
                  123 Madhapur, Hyderabad, Telangana 503001
                </p>
                <p className="text-muted mb-2">
                  📞 <strong>Phone:</strong>
                  <br />
                  +91 98765 43210
                </p>
                <p className="text-muted mb-2">
                  📧 <strong>Email:</strong>
                  <br />
                  contact@surgylife.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
