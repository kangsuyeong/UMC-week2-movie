import { faFilm, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { styled } from "styled-components";

const StyleUpBlock = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
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
  height: 400px;
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

const MainPage = () => {
  return (
    <>
      <StyleUpBlock>환영합니다</StyleUpBlock>
      <StyleDownBlock>
        <StyleFindText>
          <FontAwesomeIcon icon={faFilm} />
          Find your movies!
        </StyleFindText>
        <div>
          <StyleSearchBox />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#d9d9d9" }}
            size="2xl"
          />
        </div>
      </StyleDownBlock>
    </>
  );
};

export default MainPage;
