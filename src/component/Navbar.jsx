import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled, css } from "styled-components";

const StyleNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: #d9d9d9;
  padding: 0 30px;
  height: 8vh;
`;

const StyleTitle = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  font-size: 25px;
  font-weight: 900;
  color: red;
`;

const StyleMenuArea = styled.div`
  display: flex;
  @media screen and (max-width: 760px) {
    display: none;
  }
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
  ${(props) =>
    props.logout &&
    css`
      color: #ffff;
      font-weight: 500;
    `}
  &:active {
    color: #ffff;
    font-weight: 500;
  }
`;

const Navbar = ({ login, setLogin, setUserName }) => {
  const [clickBtn, setClickBtn] = useState("");
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
    setClickBtn("");
    window.location.href = "/";
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

  const goToSignUp = (e) => {
    navigate("/signup");
    setClickBtn(e.target.textContent);
  };

  const goToLogin = (e) => {
    navigate("/login");
    setClickBtn(e.target.textContent);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setLogin(false);
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("정보가져오기", response);
        setLogin(true);
        setUserName(response.data.name);
      } catch (error) {
        console.log("에러", error);
        setLogin(false);
      }
    };

    getToken();
  }, [login]);
  return (
    <StyleNav>
      <StyleTitle onClick={goToHome}>UMC Movie</StyleTitle>
      <StyleMenuArea>
        {login ? (
          <StyleMenuItem
            onClick={Logout}
            id={"로그아웃"}
            $clickBtn={clickBtn}
            logout={login}
          >
            로그아웃
          </StyleMenuItem>
        ) : (
          <>
            <StyleMenuItem
              onClick={goToLogin}
              id={"로그인"}
              $clickBtn={clickBtn}
            >
              로그인
            </StyleMenuItem>
            <StyleMenuItem
              onClick={goToSignUp}
              id={"회원가입"}
              $clickBtn={clickBtn}
            >
              회원가입
            </StyleMenuItem>
          </>
        )}

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
