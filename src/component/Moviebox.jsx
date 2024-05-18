import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyleMovieBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0px;
  position: relative;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyleOverview = styled.div`
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: ${(p) => (p.$isHovered ? 1 : 0)};
  transition: opacity 0.35s ease-in-out;
  font-size: 15px;
  text-overflow: ellipsis;
`;

const StyleMovieInfo = styled.div`
  display: flex;
  justify-content: space-around;
  height: 4rem;
  align-items: center;
  background-color: #191919;
  padding: 5px;
`;

const Title = styled.div`
  font-size: 1em;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Star = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleMovieImg = styled.img`
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieImgArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MovieBox = ({ movies }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/movie/${movies.id}`, {
      state: {
        title: movies.title,
        vote_average: movies.vote_average,
        release_date: movies.release_date,
        overview: movies.overview,
        poster_path: movies.poster_path,
      },
    });
  };
  return (
    <StyleMovieBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={showDetail}
    >
      <StyleOverview $isHovered={isHovered}>
        {movies.overview ? movies.overview : "줄거리가 제공되지 않습니다."}
      </StyleOverview>

      <MovieImgArea>
        <StyleMovieImg
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
        />
      </MovieImgArea>
      <StyleMovieInfo>
        <Title>{movies.title}</Title>
        <Star>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#ffea00", marginRight: "5px" }}
          />
          {movies.vote_average.toFixed(2)}
        </Star>
      </StyleMovieInfo>
    </StyleMovieBox>
  );
};

export default MovieBox;
