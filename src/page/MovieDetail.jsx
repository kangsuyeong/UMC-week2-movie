import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Profile from "../component/Profile";

const StyleBackground = styled.div`
  background-color: black;
  width: 100%;
  height: auto;
  color: white;
`;

const StyleMovieImg = styled.img`
  width: 350px;
  z-index: 100;
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
  z-index: 100;
`;

const MovieTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
  z-index: 100;
`;

const MovieOverview = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  z-index: 100;
`;

const MovieStar = styled.div`
  font-size: 23px;
  margin-bottom: 10px;
  z-index: 100;
`;

const ContainerFirst = styled(Container)`
  background: url(${(props) => props.src});
  background-size: cover;
  position: relative;
  &:before {
    content: "";
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.8;
  }
`;

const ContainerSecond = styled(Container)`
  text-align: center;
`;
const ActorArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: 23px;
  margin: 20px 0;
`;

const MovieDetail = () => {
  const [movieData, setMovieData] = useState("");
  const [movieCredits, setMovieCredits] = useState("");
  const { id } = useParams();
  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZjNTNmOTljZWY1YzA3YWU3NzcyOWFmNzUzZTBhNSIsInN1YiI6IjY1ZGQzYzdkYTg5NGQ2MDE4NzBjNmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ByDdpMFT4V_LQr7BIVaY5m9ktn18b7AIGDb6zPHuK4",
      },
    };
    let url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
    let response = await fetch(url, options);
    let data = await response.json();
    console.log("디테일", data);
    setMovieData(data);
  };

  const getCredits = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZjNTNmOTljZWY1YzA3YWU3NzcyOWFmNzUzZTBhNSIsInN1YiI6IjY1ZGQzYzdkYTg5NGQ2MDE4NzBjNmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ByDdpMFT4V_LQr7BIVaY5m9ktn18b7AIGDb6zPHuK4",
      },
    };
    let url = `https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`;
    let response = await fetch(url, options);
    let data = await response.json();
    console.log("credits", data);
    setMovieCredits(data);
  };

  useEffect(() => {
    getMovies();
    getCredits();
  }, []);

  return (
    <StyleBackground>
      <ContainerFirst
        src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`}
      >
        <Row>
          <Col lg={6}>
            <StyleLeftSection>
              <StyleMovieImg
                src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
              />
            </StyleLeftSection>
          </Col>
          <Col lg={6}>
            <StyleRightSection>
              <MovieTitle>{movieData?.title}</MovieTitle>
              <MovieItem>개봉일 {movieData?.release_date}</MovieItem>
              <MovieItem>
                장르{" "}
                {movieData.genres?.map((item, index) => (
                  <span key={item.id}>
                    {item.name}
                    {index < movieData.genres.length - 1 && ", "}
                  </span>
                ))}
              </MovieItem>
              <MovieStar>
                평점{"⭐️".repeat(Math.floor(movieData.vote_average))}
              </MovieStar>

              <MovieItem>줄거리</MovieItem>
              <MovieOverview>
                {movieData.overview
                  ? movieData.overview
                  : "줄거리가 제공되지 않습니다."}
              </MovieOverview>
            </StyleRightSection>
          </Col>
        </Row>
      </ContainerFirst>
      <ContainerSecond>
        <SubTitle>출현자 및 제작진</SubTitle>
        <ActorArea>
          <Row>
            {movieCredits.cast?.map((item, index) => (
              <Col key={index} lg={2}>
                <Profile credits={item} />
              </Col>
            ))}
          </Row>
        </ActorArea>
      </ContainerSecond>
    </StyleBackground>
  );
};

export default MovieDetail;
