import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import SlideBox from "../component/SlideBox";

const ContainerFirst1 = styled.div`
  min-height: 92vh;
  display: flex;
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
  margin: 0 50px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyleLeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 992px) {
    max-height: 50%;
    width: auto;
    margin: 20px 0;
  }
`;
const StyleRightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 25px;
  @media screen and (max-width: 1200px) {
    font-size: 22px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 992px) {
    flex-direction: row;
    width: 100%;
    max-height: 50%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyleBackground = styled.div`
  background-color: black;
  width: 100%;
  height: auto;
  color: white;
`;

const StyleMovieImg = styled.img`
  width: 55%;
  z-index: 100;
  @media screen and (max-width: 992px) {
  }
`;

const MovieItem = styled.div`
  font-size: 0.9em;
  margin-bottom: 10px;
  z-index: 100;
`;

const MovieTitle = styled.div`
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 10px;
  z-index: 100;
`;

const MovieOverview = styled.div`
  font-size: 0.65em;
  margin-bottom: 10px;
  z-index: 100;
`;

const MovieStar = styled.div`
  font-size: 0.9em;
  margin-bottom: 10px;
  z-index: 100;
`;

const ContainerFirst = styled(Container)`
  display: flex;
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const SubTitle = styled.div`
  font-size: 23px;
  margin: 20px 0;
`;
const MediaInfo = styled.div`
  z-index: 100;
  @media screen and (max-width: 992px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const MediaInfo2 = styled.div`
  z-index: 100;
  @media screen and (max-width: 992px) {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
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
    console.log("cast", data);
    setMovieCredits(data);
  };

  useEffect(() => {
    getMovies();
    getCredits();
  }, []);

  return (
    <>
      <ContainerFirst1
        src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`}
      >
        <StyleLeftSection>
          <StyleMovieImg
            src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
          />
        </StyleLeftSection>

        <StyleRightSection>
          <MediaInfo2>
            <div>
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
            </div>
          </MediaInfo2>
          <MediaInfo>
            <MovieItem>줄거리</MovieItem>
            <MovieOverview>
              {movieData.overview
                ? movieData.overview
                : "줄거리가 제공되지 않습니다."}
            </MovieOverview>
          </MediaInfo>
        </StyleRightSection>
      </ContainerFirst1>
      <ContainerSecond>
        <SubTitle>출현자 및 제작진</SubTitle>
        <ActorArea>
          {movieCredits && <SlideBox credits={movieCredits} />}
        </ActorArea>
      </ContainerSecond>
    </>
  );
};

export default MovieDetail;
