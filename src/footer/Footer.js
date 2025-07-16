import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 my-4">
              <h4>About SurgyLife</h4>
              <p className="mt-10">
                SurgyLife is a multi-speciality healthcare platform delivering a
                hassle-free experience for all your surgeries and medical needs
                with personalized care
              </p>
            </div>

            <div className="col-lg-3 py-4">
              <h4>Why Choose Us</h4>
              <ul
                className="list-unstyled mt-3 "
                style={{ letterSpacing: "1px" }}
              >
                <li>✅ 24/7 Emergency Services</li>
                <li>✅ Experienced & Caring Doctors</li>
                <li>✅ Modern Medical Technology</li>
                <li>✅ Patient-Centric Approach</li>
                <li>✅ Modern Medical Technology</li>
                <li>✅ Patient-Centric Approach</li>
                <li>✅ 24/7 Emergency Services</li>
              </ul>
            </div>
            <div className="col-lg-3 my-4">
              <h4>Corporate Office</h4>
              <p className="text-muted mb-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-2 text-primary"
                />
                <br />
                123 Madhapur, Hyderabad, Telangana 503001
              </p>
              <p className="text-muted mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
                <br />
                +91 98765 43210
              </p>
              <p className="text-muted mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 text-danger"
                />
                <br />
                contact@surgylife.com
              </p>
            </div>
            <div className="col-lg-3 my-4">
              <h4>Contact Us</h4>
              <FontAwesomeIcon icon="fa-solid fa-address-card" />
              <p className="text-muted mb-2">
                📍 <strong>Address:</strong>
                <br />
                123 Madhapur, Hyderabad, Telangana 503001
              </p>
              <p className="text-muted mb-2">
                📞 <strong>Phone:</strong>
                <br />
                +91 98765 43210
              </p>
              <p className="text-muted mb-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <br />
                contact@surgylife.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-3">
              <p>&copy; Surgy Life</p>
            </div>
            <div className="col-lg-6 my-3 ">
              <p className="float-end">Designed and Developed by ARC</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
