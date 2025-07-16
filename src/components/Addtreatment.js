import React, { useState } from "react";
import axios from "axios";
import styles from "./Styles.module.css";
const Addtreatment = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const addTreatmentData = (e) => {
    e.preventDefault();
    axios
      .post("https://surgylife-backend.onrender.com/treatment", {
        name,
        description,
        price,
        image,
      })
      .then((res) => {
        alert("Treatment added successfully");
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
      })
      .catch((err) => {
        alert("Better luck next time");
      });
  };
  return (
    <section className="my-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className={styles.bx_shadow}>
              <form onSubmit={addTreatmentData}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Treatment Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control mb-3"
                  />
                  <textarea
                    name="description"
                    placeholder="treatment desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    name="price"
                    placeholder="Treatment Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control mb-3"
                  />
                  <input
                    type="text"
                    name="image"
                    placeholder="Treatment Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="form-control mb-3"
                  />
                  <div className="mb-3 d-flex justify-content-end">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Add Treatment"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addtreatment;
