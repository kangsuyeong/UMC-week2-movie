import { faFilm, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { styled } from "styled-components";
import Movielist from "../component/Movielist";
import { ClipLoader } from "react-spinners";

const Background = styled.div`
  background-color: black;
  min-height: 81vh;
`;
const StyleUpBlock = styled.div`
  background-color: #696969;
  height: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const StyleDownBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 270px;
  align-items: center;
`;

const StyleFindText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #d9d9d9;
  margin: 50px;
`;

const StyleSearchBox = styled.input`
  border-radius: 50px;
  border: none;
  width: 300px;
  height: 30px;
  padding: 20px;
  margin-right: 20px;
  font-weight: 700px;
`;

const ShowSearchArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

const ShowMovieBox = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  max-width: 1000px;
  max-height: 600px;
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background: #d9d9d9;
  }
`;

const StyleLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: white;
`;

const MainPage = () => {
  const [keyword, setKeyword] = useState("");
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
    let url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=1`;
    setLoading(true);
    try {
      let response = await fetch(url, options);
      let data = await response.json();
      setMovieData(data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
    setLoading(false);
  };
  // const onChangeKeyword = (e) => {
  //   const keywordCheck = /[\w\s가-힣0-9]{2,}/; //문자열, 숫자, 스페이스 포함
  //   if (keywordCheck.test(e.target.value)) {
  //     setKeyword(e.target.value);
  //   } else {
  //     setKeyword("");
  //   }
  // };
  useEffect(() => {
    getMovies();
  }, [keyword]);

  const onChangeKeyword = (e) => {
    console.log("입력 값 : ", e.target.value);
  };

  let alertTimer;
  const debounceFun = (e) => {
    // 앞선 타이머를 리셋
    // 따라서 마지막 함수가 실행 (타이핑을 멈추고선 함수실행)
    if (alertTimer) {
      clearTimeout(alertTimer);
    }

    // 타이머 시작
    alertTimer = setTimeout(() => {
      console.log("입력한 키워드 : ", e.target.value);
      setKeyword(e.target.value);
    }, 1000);
  };
  return (
    <Background>
      <Container>
        <StyleUpBlock>환영합니다</StyleUpBlock>
      </Container>
      <StyleDownBlock>
        <StyleFindText>
          <FontAwesomeIcon icon={faFilm} />
          Find your movies!
        </StyleFindText>
        <div>
          <StyleSearchBox
            onChange={debounceFun}
            type="text"
            placeholder="키워드를 입력해주세요."
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#d9d9d9" }}
            size="2xl"
          />
        </div>
      </StyleDownBlock>
      <ShowSearchArea>
        {keyword && (
          <ShowMovieBox>
            {loading ? (
              <StyleLoading>
                <ClipLoader color="#ffff" loading={loading} size={150} />
                <h3>로딩중입니다...</h3>
              </StyleLoading>
            ) : movieData.length > 0 ? (
              <Movielist movies={movieData} />
            ) : (
              <h3>검색 내용이 없습니다.</h3>
            )}
          </ShowMovieBox>
        )}
      </ShowSearchArea>
    </Background>
  );
};

export default MainPage;
