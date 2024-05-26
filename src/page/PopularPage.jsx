import React, { useEffect, useState } from "react";
import Moviepage from "../component/Moviepage";
import { styled } from "styled-components";
import Paginations from "../component/Paginations";
import Movielist from "../component/Movielist";
import { ClipLoader } from "react-spinners";

const BackGround = styled.div`
  background-color: black;
  min-height: 84vh;
`;

const Stylebackground = styled.div`
  background-color: black;
`;

const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PopularPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const getMovies = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&region=KR&page=${page}`;
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
    setTotalPage(data.total_pages);
    setMovieData(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <BackGround>
      <Stylebackground>
        {loading ? (
          <StyleLoading>
            <ClipLoader color="#ffff" loading={loading} size={150} />
          </StyleLoading>
        ) : (
          <Movielist movies={movieData} />
        )}
      </Stylebackground>
      <Paginations page={page} setPage={setPage} totalPage={totalPage} />
    </BackGround>
  );
};

export default PopularPage;
