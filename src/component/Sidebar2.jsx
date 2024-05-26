import React, { useState } from "react";
import styled, { css } from "styled-components";

const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <button onClick={() => setIsOpen(true)}>열기</button>
      </Container>
      <SidebarBox isOpen={isOpen}>
        <button onClick={() => setIsOpen(false)}>X</button>
        <p>이름: 내이름</p>
      </SidebarBox>
    </>
  );
};

const Container = styled.div`
  margin: 0;
  overflow: hidden; // translate(-100%)로 올라간 스크롤 없애줌
  background: gray;
`;

const SidebarBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%); // 사이드바 위로 올려둠
  width: 12.5rem;
  height: 100%;
  padding: 0.875rem;
  border-radius: 0.25rem;
  background: black;
  opacity: 0; // 투명도 조절하여 부드럽게 보이게하기
  transition: transform 500ms linear, opacity 500ms linear;
  pointer-events: none; // 사이드바 비활성화 일 때 클릭 안 됨

  & button {
    cursor: pointer;
  }

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
      opacity: 1;
      pointer-events: visible;
    `}
`;

export default Sidebar2;
