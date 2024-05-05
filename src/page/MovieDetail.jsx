import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const MovieDetail = () => {
  const location = useLocation();
  const movies = location.state;
  console.log(movies.poster_path);

  const StyleBackground = styled.div`
    background-color: black;
    width: 100%;
    height: 675px;
    color: white;
  `;

  const StyleMovieImg = styled.img`
    width: 350px;
  `;

  const StyleLeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 675px;
  `;
  const StyleRightSection = styled.div`
    height: 675px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const MovieItem = styled.div`
    font-size: 23px;
    margin-bottom: 10px;
  `;

  const MovieTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
  `;

  const MovieOverview = styled.div`
    font-size: 15px;
    margin-bottom: 10px;
  `;

  const MovieStar = styled.div`
    font-size: 23px;
    margin-bottom: 10px;
  `;

  useEffect(() => {
    console.log("location", location);
  }, []);
  return (
    <StyleBackground>
      <Container>
        <Row>
          <Col lg={6}>
            <StyleLeftSection>
              <StyleMovieImg
                src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`}
              />
            </StyleLeftSection>
          </Col>
          <Col lg={6}>
            <StyleRightSection>
              <MovieTitle>{movies?.title}</MovieTitle>
              <MovieStar>
                평점{"⭐️".repeat(Math.floor(movies.vote_average))}
              </MovieStar>
              <MovieItem>개봉일 {movies?.release_date}</MovieItem>
              <MovieItem>줄거리</MovieItem>
              <MovieOverview>
                {movies.overview
                  ? movies.overview
                  : "줄거리가 제공되지 않습니다."}
              </MovieOverview>
            </StyleRightSection>
          </Col>
        </Row>
      </Container>
    </StyleBackground>
  );
};

export default MovieDetail;
