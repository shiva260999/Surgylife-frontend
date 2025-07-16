import React, { useEffect, useState } from "react";
//import styles from "./Styles.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import axios from "axios";
const Viewappointments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/appointment")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <section className="py-3">
        <Container>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Patient Name</th>

                    <th>Email</th>
                    <th>Mobile</th>
                    <th>date</th>
                    <th>Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((appoint) => {
                    return (
                      <tr>
                        <td>{appoint.patientName}</td>
                        <td>{appoint.email}</td>
                        <td>{appoint.mobile}</td>
                        <td>{appoint.date}</td>
                        <td>{appoint.treatment}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Viewappointments;
