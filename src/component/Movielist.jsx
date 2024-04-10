import React from "react";
import Moviebox from "./Moviebox";
import { Col, Container, Row } from "react-bootstrap";

const Movielist = ({ movies }) => {
  console.log("영화목록", movies);
  return (
    <Container>
      <Row>
        {movies.map((item, index) => (
          <Col lg={3}>
            <Moviebox key={index} movies={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movielist;
