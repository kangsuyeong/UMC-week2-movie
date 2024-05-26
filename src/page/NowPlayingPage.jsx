import React, { useEffect, useRef, useState } from "react";
import Movielist from "../component/Movielist";
import { ClipLoader } from "react-spinners";
import { styled } from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NowPlayingPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const pageEnd = useRef(null);

  const getMovies = async () => {
    setLoading(true);
    let url = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&region=KR&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzZjNTNmOTljZWY1YzA3YWU3NzcyOWFmNzUzZTBhNSIsInN1YiI6IjY1ZGQzYzdkYTg5NGQ2MDE4NzBjNmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ByDdpMFT4V_LQr7BIVaY5m9ktn18b7AIGDb6zPHuK4",
      },
    };
    let response = await fetch(url, options);
    let data = await response.json();
    if (data.results.length == 0) {
      setHasMore(false);
    } else {
      setMovieData((prev) => [...prev, ...data.results]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  useEffect(() => {
    if (!hasMore) return; // 더 이상 데이터가 없으면 감지 중지
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (pageEnd.current) {
      observer.observe(pageEnd.current);
    }

    return () => {
      if (pageEnd.current) {
        observer.unobserve(pageEnd.current); // 클린업 시 observer를 해제
      }
    };
  }, [hasMore, loading]);

  return (
    <>
      <MovieContainer>
        {loading ? (
          <ClipLoader color="#ffff" loading={loading} size={150} />
        ) : (
          <Movielist movies={movieData} />
        )}
      </MovieContainer>
      <div ref={pageEnd}></div>
    </>
  );
};

export default NowPlayingPage;
