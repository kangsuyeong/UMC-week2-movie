import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const BackGround = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.5em;
`;

const InputArea = styled.div`
  margin-bottom: 0.5em;
`;

const SignUpForm = styled.form`
  width: 25em;
  margin: 1em 0;
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

const LoginArea = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 15px;
`;

const Leftmsg = styled.div`
  font-size: 15px;
`;
const Rightmsg = styled.div`
  cursor: pointer;
  font-weight: 400;
`;
const SignUp = () => {
  //이름
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameAvailable, setNameAvailable] = useState(false);

  //id
  const [id, setID] = useState("");
  const [idError, setIDError] = useState("");
  const [idAvailable, setIDAvailable] = useState(false);

  //이메일
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailAvailable, setEmailAvailable] = useState(false);

  //나이
  const [age, setAge] = useState(0);
  const [ageError, setAgeError] = useState("");
  const [ageAvailable, setAgeAvailable] = useState(false);

  //비밀번호
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordAvailable, setPasswordAvailable] = useState(false);

  //비밀번호 확인
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [passwordConfirmAvailable, setPasswordConfirmAvailable] =
    useState(false);

  const navigate = useNavigate();

  // name Handler
  const onChangeNameHandler = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    nameCheckHandler(nameValue);
  };

  const nameCheckHandler = async (name) => {
    const nameForm = /^[가-힣a-zA-Z]+$/; // 한글 + 영문만
    if (name == "") {
      setNameError("이름을 입력해주세요.");
      setNameAvailable(false);
    } else if (!nameForm.test(name)) {
      setNameError("올바른 이름을 입력해주세요.");
      setNameAvailable(false);
    } else {
      setNameError("");
      setNameAvailable(true);
    }
  };

  // id Handler
  const onChangeIDHandler = (e) => {
    const idValue = e.target.value;
    setID(idValue);
    idCheckHandler(idValue);
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

  // email Handler
  const onChangeEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    emailCheckHandler(emailValue);
  };

  const emailCheckHandler = async (email) => {
    const emailForm = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/; //이메일 형식만 가능
    if (email == "") {
      setEmailError("이메일을 입력해주세요.");
      setEmailAvailable(false);
    } else if (!emailForm.test(email)) {
      setEmailError("올바른 이메일 형식을 입력해주세요.");
      setEmailAvailable(false);
    } else {
      setEmailError("");
      setEmailAvailable(true);
    }
  };

  // age Handler
  const onChangeAgeHandler = (e) => {
    const ageValue = e.target.value;
    setAge(ageValue);
    ageCheckHandler(ageValue);
  };

  const ageCheckHandler = async (age) => {
    const ageForm = /^[0-9]+$/; // 숫자만 가능
    console.log("확인", Number.isNaN(parseInt(3.0)));
    if (age == "") {
      setAgeError("나이을 입력해주세요.");
      setAgeAvailable(false);
    } else if (parseInt(age) < 0) {
      setAgeError("음수 값은 입력할 수 없습니다.");
      setAgeAvailable(false);
    } else if (age % 1 != 0 && !Number.isNaN(parseInt(age))) {
      setAgeError("실수 값은 입력할 수 없습니다.");
      setAgeAvailable(false);
    } else if (!ageForm.test(age)) {
      setAgeError("올바른 나이을 입력해주세요.");
      setAgeAvailable(false);
    } else if (age < 19) {
      setAgeError("미성년자는 가입이 불가합니다.");
      setAgeAvailable(false);
    } else {
      setAgeError("");
      setAgeAvailable(true);
    }
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

  // passwordConfirm Handler
  const onChangePasswordConfirmHandler = (e) => {
    const passwordConfirmValue = e.target.value;
    setPasswordConfirm(passwordConfirmValue);
    passwordConfirmCheckHandler(passwordConfirmValue);
  };

  const passwordConfirmCheckHandler = async (passwordConfirm) => {
    if (passwordConfirm != password) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
      setPasswordConfirmAvailable(false);
    } else {
      setPasswordConfirmError("");
      setPasswordConfirmAvailable(true);
    }
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    if (name == "") {
      setNameError("이름을 입력해주세요.");
    }
    if (id == "") {
      setIDError("아이디을 입력해주세요.");
    }

    if (email == "") {
      setEmailError("이메일을 입력해주세요.");
    }

    if (age == "") {
      setAgeError("나이을 입력해주세요.");
    }

    if (password == "") {
      setPasswordError("비밀번호을 입력해주세요.");
    }
    if (passwordConfirm == "") {
      setPasswordConfirmError("비밀번호을 입력해주세요.");
    }
    if (
      nameAvailable &&
      idAvailable &&
      emailAvailable &&
      ageAvailable &&
      passwordAvailable &&
      passwordConfirmAvailable
    ) {
      alert("회원가입에 성공하였습니다.");
      const user = {
        name,
        id,
        email,
        age,
        password,
        passwordConfirm,
      };
      console.log("유저정보", user);
      navigate("/login");
    } else {
      console.log("회원가입실패");
    }
  };

  const GoToLoginPage = () => {
    navigate("/login");
  };

  return (
    <BackGround>
      <SignUpForm onSubmit={signUpHandler}>
        <Title>회원가입 페이지</Title>
        <div>
          <InputArea>
            <label htmlFor="name">이름</label>
            <div>
              <InputBox
                type="text"
                placeholder="홍길동"
                id="name"
                onChange={onChangeNameHandler}
              />
            </div>
            {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
          </InputArea>
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
            <label htmlFor="email">이메일</label>
            <div>
              <InputBox
                type="text"
                placeholder="hong99@gmail.com"
                id="email"
                onChange={onChangeEmailHandler}
              />
            </div>
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <label htmlFor="age">나이</label>
            <div>
              <InputBox
                type="text"
                placeholder="28"
                onChange={onChangeAgeHandler}
                id="age"
              />
            </div>
            {ageError && <ErrorMessage>{ageError}</ErrorMessage>}
          </InputArea>
          <InputArea>
            <label htmlFor="password">비밀번호</label>
            <div>
              <InputBox
                type="password"
                placeholder="비밀번호 입력"
                id="password"
                onChange={onChangePasswordHandler}
              />
              {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            </div>
          </InputArea>
          <InputArea>
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <div>
              <InputBox
                type="password"
                placeholder="비밀번호 확인"
                id="passwordConfirm"
                onChange={onChangePasswordConfirmHandler}
              />
            </div>
            {passwordConfirmError && (
              <ErrorMessage>{passwordConfirmError}</ErrorMessage>
            )}
          </InputArea>
        </div>

        <SubmitArea>
          <SubmitBtn type="submit">제출하기</SubmitBtn>
        </SubmitArea>

        <LoginArea>
          <Leftmsg>이미 아이디가 있으신가요?</Leftmsg>
          <Rightmsg onClick={GoToLoginPage}>로그인 페이지로 이동하기</Rightmsg>
        </LoginArea>
      </SignUpForm>
    </BackGround>
  );
};

export default SignUp;
