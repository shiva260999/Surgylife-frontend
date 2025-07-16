import React, { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Treatments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/treatment")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className={styles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Treatments</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-3`}>
        <div className="container">
          <div className="row">
            {data.map((treat) => {
              return (
                <div className="col-lg-3 mb-4 ">
                  <NavLink
                    className="text-decoration-none"
                    to={`/subtreatments/${treat.name}`}
                  >
                    <div className={`${styles.custom_btn}`}>
                      {" "}
                      <h5 className=" text-center">{treat.name}</h5>{" "}
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Treatments;
