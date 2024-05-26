import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieBox from "./Moviebox";
import { styled } from "styled-components";

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px; /* 그리드 항목 간의 간격 */
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Movielist = ({ movies }) => {
  console.log("영화목록", movies);
  return (
    <Container>
      {/* <Row>
        {movies.map((item, index) => (
          <Col key={index} lg={3}>
            <MovieBox movies={item} />
          </Col>
        ))}
      </Row> */}
      <MovieContainer>
        {movies.map((item, index) => (
          <div key={index} className="grid-item">
            <MovieBox movies={item} />
          </div>
        ))}
      </MovieContainer>
    </Container>
  );
};

export default Movielist;
