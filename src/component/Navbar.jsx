import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, css } from "styled-components";

const StyleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: #d9d9d9;
  padding: 0 30px;
  height: 65px;
`;

const StyleTitle = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  font-size: 1.6em;
  font-weight: 900;
  color: red;
`;

const StyleMenuArea = styled.div`
  display: flex;
`;
const StyleMenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #d9d9d9;
  &:hover {
    transform: scale(1.1);
  }
  ${(props) =>
    props.id == props.$clickBtn &&
    css`
      color: #ffff;
      font-weight: 500;
    `}
  &:active {
    color: #ffff;
    font-weight: 500;
  }
`;

const Navbar = ({ login, setLogin }) => {
  const [clickBtn, setClickBtn] = useState("");
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
    setClickBtn("");
  };
  const goToPopular = (e) => {
    navigate("/popular");
    setClickBtn(e.target.textContent);
  };
  const goToNowPlaying = (e) => {
    navigate("/nowplaying");
    setClickBtn(e.target.textContent);
  };
  const goToTopRated = (e) => {
    navigate("/toprated");
    setClickBtn(e.target.textContent);
  };
  const goToUpComing = (e) => {
    navigate("/upcoming");
    setClickBtn(e.target.textContent);
  };

  const changeLogin = () => {
    setLogin(!login);
  };

  const goToSignUp = (e) => {
    navigate("/signup");
    setClickBtn(e.target.textContent);
  };

  return (
    <StyleNav>
      <StyleTitle onClick={goToHome}>UMC Movie</StyleTitle>

      <StyleMenuArea>
        {/* <StyleMenuItem onClick={changeLogin} login={login}>
          {login ? "로그아웃" : "로그인"}
        </StyleMenuItem> */}
        <StyleMenuItem
          onClick={goToSignUp}
          id={"회원가입"}
          $clickBtn={clickBtn}
        >
          회원가입
        </StyleMenuItem>

        <StyleMenuItem
          onClick={goToPopular}
          id={"Popular"}
          $clickBtn={clickBtn}
        >
          Popular
        </StyleMenuItem>
        <StyleMenuItem
          onClick={goToNowPlaying}
          id={"Now Playing"}
          $clickBtn={clickBtn}
        >
          Now Playing
        </StyleMenuItem>
        <StyleMenuItem
          onClick={goToTopRated}
          id={"Top Rated"}
          $clickBtn={clickBtn}
        >
          Top Rated
        </StyleMenuItem>
        <StyleMenuItem
          onClick={goToUpComing}
          id={"Upcoming"}
          $clickBtn={clickBtn}
        >
          Upcoming
        </StyleMenuItem>
      </StyleMenuArea>
    </StyleNav>
  );
};

export default Navbar;
