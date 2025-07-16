import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Styles.module.css";
const Adminsidebar = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to="viewtreatments">View Treatments</NavLink>
      </li>
      <li>
        <NavLink to="addtreatment">Add Treatment</NavLink>
      </li>
      <li>
        <NavLink to="deletetreatment">Delete Treatment</NavLink>
      </li>
      <li>
        <NavLink to="edittreatment">Edit Treatment</NavLink>
      </li>
      <li>
        <NavLink to="viewappointments">View Appointments</NavLink>
      </li>
      <li>
        <NavLink to="viewquestions">View Questions</NavLink>
      </li>
    </ul>
  );
};

export default Adminsidebar;
