import React, { useState, useEffect } from "react";
import Movielist from "../component/Movielist";
import { ClipLoader } from "react-spinners";
import { styled } from "styled-components";

const Stylebackground = styled.div`
  background-color: black;
`;

const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Moviepage = ({ url }) => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZjNTNmOTljZWY1YzA3YWU3NzcyOWFmNzUzZTBhNSIsInN1YiI6IjY1ZGQzYzdkYTg5NGQ2MDE4NzBjNmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ByDdpMFT4V_LQr7BIVaY5m9ktn18b7AIGDb6zPHuK4",
      },
    };
    setLoading(true);
    let response = await fetch(url, options);
    let data = await response.json();
    setMovieData(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [url]);
  return (
    <Stylebackground>
      {loading ? (
        <StyleLoading>
          <ClipLoader color="#ffff" loading={loading} size={150} />
        </StyleLoading>
      ) : (
        <Movielist movies={movieData} />
      )}
    </Stylebackground>
  );
};

export default Moviepage;
