import React from "react";
import styles from "./Styles.module.css";
import aboutlogo from "./aboutbanner.jpg";
const Aboutus = () => {
  return (
    <>
      <section className={styles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>About US</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 mb-4 mb-lg-0"
              style={{ height: "300px" }}
            >
              <img
                src={aboutlogo}
                alt=" About  Logo"
                className="d-inline-block align-top"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>

            <div className="col-lg-6 col-md-12">
              <h2 className="fw-bold mb-3 text-center">SurgyLife</h2>
              <p className="text-muted">
                At SurgyLife, we are committed to providing world-class
                healthcare services with compassion and care. Our team of
                experts works around the clock to ensure your wellness and
                recovery.
              </p>

              <p className="text-muted">
                From preventive care to advanced surgeries, we use the latest
                technology to deliver the best outcomes for our patients.
              </p>

              <a
                href="#contact"
                className="btn btn-outline-primary btn-lg rounded-pill mt-3"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
