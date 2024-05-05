import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyleMovieBox = styled.div`
  width: 300px;
  padding: 0;
  margin: 10px;
  position: relative;
  color: #b3b3b3;
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
  opacity: ${(p) => (p.isHovered ? 1 : 0)};
  transition: opacity 0.35s ease-in-out;
  font-size: 15px;
  text-overflow: ellipsis;
`;

const StyleMovieInfo = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  background-color: #191919;
`;

const StyleMovieImg = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const MovieBox = ({ movies }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/movie/${movies.original_title}`, {
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
      <StyleOverview isHovered={isHovered}>
        <p>
          {movies.overview ? movies.overview : "줄거리가 제공되지 않습니다."}
        </p>
      </StyleOverview>
      <div>
        <StyleMovieImg
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
        />
      </div>
      <StyleMovieInfo>
        <div>{movies.title}</div>
        <div>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#ffea00", marginRight: "5px" }}
          />
          {movies.vote_average.toFixed(2)}
        </div>
      </StyleMovieInfo>
    </StyleMovieBox>
  );
};

export default MovieBox;
