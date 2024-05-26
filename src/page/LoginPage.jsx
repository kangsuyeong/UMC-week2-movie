import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

const BackGround = styled.div`
  background-color: black;
  height: 92vh;
  color: white;
  display: flex;
  justify-content: center;
`;
const SignUpForm = styled.form`
  width: 450px;
  margin: 40px;
  margin-top: 100px;
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 15px;
`;

const LoginPage = ({ setLogin }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //id
  const [id, setID] = useState("");
  const [idError, setIDError] = useState("");
  const [idAvailable, setIDAvailable] = useState(false);

  //비밀번호
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordAvailable, setPasswordAvailable] = useState(false);

  // id Handler
  const onChangeIDHandler = (e) => {
    const idValue = e.target.value;
    setID(idValue);
    idCheckHandler(idValue);
  };

  // password Handler
  const onChangePasswordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    passwordCheckHandler(passwordValue);
  };

  const passwordCheckHandler = async (password) => {
    const passwordForm =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,12}$/; //최소 4자리 이상 최대 12자리 영어, 숫자, 특수문자 모두조합
    if (password == "") {
      setPasswordError("비밀번호을 입력해주세요.");
      setPasswordAvailable(false);
    } else if (!passwordForm.test(password)) {
      setPasswordError(
        "비밀번호는 4-12자의 영소문자, 숫자, 특수문자를 모두 조합해서 입력해주세요."
      );
      setPasswordAvailable(false);
    } else {
      setPasswordError("");
      setPasswordAvailable(true);
    }
  };

  const idCheckHandler = async (id) => {
    const idForm = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (id == "") {
      setIDError("아이디을 입력해주세요.");
      setIDAvailable(false);
    } else if (!idForm.test(id)) {
      setIDError("아이디는 6-20자의 영소문자, 숫자만 입력이 가능합니다.");
      setIDAvailable(false);
    } else {
      setIDError("");
      setIDAvailable(true);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { username: id, password };
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        user
      );
      setLogin(true);
      navigate("/");
      alert("로그인 되었습니다.");
      //토큰 저장
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
      if (error.response.status == 401) {
        alert("아이디나 비밀번호가 틀립니다.");
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <BackGround>
      <SignUpForm onSubmit={loginHandler}>
        <Title>로그인 페이지</Title>
        <div>
          <InputArea>
            <label htmlFor="id">아이디</label>
            <div>
              <InputBox
                type="text"
                placeholder="아이디"
                id="id"
                onChange={onChangeIDHandler}
              />
            </div>
            {idError && <ErrorMessage>{idError}</ErrorMessage>}
          </InputArea>

          <InputArea>
            <label htmlFor="password">비밀번호</label>
            <div>
              <InputBox
                type="password"
                placeholder="비밀번호"
                id="password"
                onChange={onChangePasswordHandler}
              />
            </div>
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
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
