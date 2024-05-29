import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled, css } from "styled-components";

const Container = styled.div`
  background-color: black;
  overflow: hidden;
`;

const WrapSidebar = styled.div`
  border-left: 1px solid rgb(33, 33, 33);
  color: white;
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 0.4s ease;
  height: 100%;
  z-index: 101;
  width: ${(props) => props.width && `${props.width}px`};
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : `translateX(${props.width}px)`};
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-top: 20px;
`;

const MenuBtn2 = styled.button`
  position: relative;
  left: 230px;
  top: 15px;
  z-index: 99;
  transition: 0.8s ease;
  border: none;
  background-color: black;
`;

const MenuBtn = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  z-index: 99;
  transition: 0.8s ease;
  background-color: transparent;
  border: none;
  overflow: hidden;
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

const Sidebar = ({ width, login }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const [move, setMove] = useState(100);

  const side = useRef();
  const { pathname } = useLocation();

  const openSide = () => {
    setX(0);
    setOpen(true);
    setMove(0);
  };

  const closeSide = () => {
    setX(-width);
    setOpen(false);
    setMove(100);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setLogin(false);
  };

  return (
    <Container>
      <MenuBtn onClick={() => openSide()}>
        <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#e9e9e9" }} />
      </MenuBtn>

      <WrapSidebar
        ref={side}
        width={width}
        xPosition={xPosition}
        isOpen={isOpen}
        move={move}
      >
        <MenuBtn2 onClick={() => closeSide()}>
          <FontAwesomeIcon icon={faX} size="xl" style={{ color: "#e9e9e9" }} />
        </MenuBtn2>
        {/* //사이드바 컴포넌트 내부 값이 구현되는 위치 */}
        <Content>
          {login ? (
            <Menu onClick={Logout} logout={login}>
              로그아웃
            </Menu>
          ) : (
            <>
              <Menu
                to="/login"
                menuPath={"/login"}
                pathname={pathname}
                onClick={closeSide}
              >
                로그인
              </Menu>
              <Menu
                to="signup"
                menuPath={"/signup"}
                pathname={pathname}
                onClick={closeSide}
              >
                회원가입
              </Menu>
            </>
          )}

          <Menu
            to="/popular"
            menuPath={"/popular"}
            pathname={pathname}
            onClick={closeSide}
          >
            Popular
          </Menu>
          <Menu
            to="/nowplaying"
            menuPath={"/nowplaying"}
            pathname={pathname}
            onClick={closeSide}
          >
            Now Playing
          </Menu>
          <Menu
            to="/toprated"
            menuPath={"/toprated"}
            pathname={pathname}
            onClick={closeSide}
          >
            Top Rated
          </Menu>
          <Menu
            to="/upcoming"
            menuPath={"/upcoming"}
            pathname={pathname}
            onClick={closeSide}
          >
            Upcoming
          </Menu>
        </Content>
      </WrapSidebar>
    </Container>
  );
};

export default Sidebar;
