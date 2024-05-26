import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled, css } from "styled-components";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

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
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const Menu = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: #d9d9d9;
  &:hover {
    transform: scale(1.1);
  }

  ${(props) =>
    props.logout &&
    css`
      color: #ffff;
      font-weight: 500;
    `}
  ${(props) =>
    props.menuPath == props.pathname &&
    css`
      color: #ffff;
      font-weight: 500;
    `}
`;

const SideArea = styled.div`
  display: none;
  @media screen and (max-width: 770px) {
    display: block;
  }
`;

const Navbar = ({ login, setLogin, setUserName }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToHome = () => {
    navigate("/");
    window.location.href = "/";
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
          <Menu onClick={Logout} logout={login}>
            로그아웃
          </Menu>
        ) : (
          <>
            <Menu to="/login" menuPath={"/login"} pathname={pathname}>
              로그인
            </Menu>
            <Menu to="signup" menuPath={"/signup"} pathname={pathname}>
              회원가입
            </Menu>
          </>
        )}

        <Menu to="/popular" menuPath={"/popular"} pathname={pathname}>
          Popular
        </Menu>
        <Menu to="/nowplaying" menuPath={"/nowplaying"} pathname={pathname}>
          Now Playing
        </Menu>
        <Menu to="/toprated" menuPath={"/toprated"} pathname={pathname}>
          Top Rated
        </Menu>
        <Menu to="/upcoming" menuPath={"/upcoming"} pathname={pathname}>
          Upcoming
        </Menu>
      </StyleMenuArea>
      <SideArea>
        <Sidebar width={280} login={login} setLogin={setLogin} />
      </SideArea>
    </StyleNav>
  );
};

export default Navbar;
