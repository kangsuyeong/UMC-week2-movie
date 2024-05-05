import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyleBackground = styled.div`
  background-color: black;
  color: white;
  height: 675px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const StyleGoToHomeBtn = styled(Link)`
  width: 200px;
  height: 40px;
  text-decoration: none;
  color: white;
  border: 3px solid white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const NotFoundPage = () => {
  return (
    <StyleBackground>
      <div>찾을 수 없는 페이지입니다.</div>
      <div>잘못된 경로를 이용하셨습니다.</div>
      <StyleGoToHomeBtn to="/">홈으로 이동</StyleGoToHomeBtn>
    </StyleBackground>
  );
};

export default NotFoundPage;
