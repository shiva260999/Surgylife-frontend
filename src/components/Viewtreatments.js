import React, { useEffect, useState } from "react";
//import styles from "./Styles.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import axios from "axios";
const Viewtreatments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/treatment")
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
                    <th>Name</th>

                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((treat) => {
                    return (
                      <tr>
                        <td>{treat.name}</td>
                        <td>{treat.description}</td>
                        <td>{treat.price}</td>
                        <td>{treat.image}</td>
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

export default Viewtreatments;
