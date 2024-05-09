import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const BackGround = styled.div`
  background-color: black;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
`;
const SignUpForm = styled.form`
  width: 400px;
  margin: 40px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`;
const InputArea = styled.div`
  margin-bottom: 10px;
`;
const InputBox = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  outline: none;
`;
const SubmitArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SubmitBtn = styled.button`
  width: 250px;
  height: 50px;
  background-color: black;
  color: white;
  border: 2px solid white;
`;

const LoginPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <BackGround>
      <SignUpForm>
        <Title>로그인 페이지</Title>
        <div>
          <InputArea>
            <label htmlFor="name">이름</label>
            <div>
              <InputBox type="text" placeholder="이름" id="name" />
            </div>
          </InputArea>
          <InputArea>
            <label htmlFor="password">비밀번호</label>
            <div>
              <InputBox type="password" placeholder="비밀번호" id="password" />
            </div>
          </InputArea>
        </div>

        <SubmitArea>
          <SubmitBtn type="submit">로그인</SubmitBtn>
        </SubmitArea>
      </SignUpForm>
    </BackGround>
  );
};

export default LoginPage;
