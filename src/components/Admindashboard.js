import React from "react";
import styles from "./Styles.module.css";
import Adminsidebar from "./Adminsidebar";
import { Outlet } from "react-router-dom";
const Admindashboard = () => {
  return (
    <>
      <section className={styles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Admin Dashboard</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-3`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Adminsidebar />
            </div>
            <div className="col-lg-9">
              <h1 className="text-center">Welcome </h1>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admindashboard;
