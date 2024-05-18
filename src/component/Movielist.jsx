import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieBox from "./Moviebox";

const Movielist = ({ movies }) => {
  console.log("영화목록", movies);
  return (
    <Container>
      <Row>
        {movies.map((item, index) => (
          <Col key={index} lg={3}>
            <MovieBox movies={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movielist;
