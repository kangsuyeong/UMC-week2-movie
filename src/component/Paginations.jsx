import React from "react";
import { styled } from "styled-components";

const Background = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d9d9d9;
`;

const PageNum = styled.div`
  margin: 0 40px;
  font-size: 20px;
`;

const PagePreButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.option ? "gray" : "white")};
  pointer-events: ${(props) => (props.option ? "none" : "auto")};
  border: none;
  font-size: 25px;
`;

const PageNextButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.option ? "gray" : "white")};
  pointer-events: ${(props) => (props.option ? "none" : "auto")};
  border: none;
  font-size: 25px;
`;
const Paginations = ({ page, setPage, totalPage }) => {
  const goToNextPage = () => {
    setPage(page + 1);
  };
  const goToPrePage = () => {
    setPage(page - 1);
  };

  const goToPage = (p) => {
    setPage(p);
  };
  return (
    <Background>
      <PagePreButton option={page === 1} onClick={() => goToPage(page - 1)}>
        &lt;
      </PagePreButton>
      <PageNum>{page}</PageNum>
      <PageNextButton
        option={page === totalPage}
        onClick={() => goToPage(page + 1)}
      >
        &gt;
      </PageNextButton>
    </Background>
  );
};

export default Paginations;
