import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Asap Condensed", sans-serif;
  font-size: 10rem;
  font-weight: 500;
  text-align: center;
  color: white;
  position: absolute;
  top: -4rem;
  left: 8%;
`;

const Signin = styled.button`
  font-size: 1.5rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  border: 1.5px solid white;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  border-radius: 1.2rem;
  background-color: transparent;
  color: white;
  padding: 1rem;
  width: 15%;
  margin-left: 1.5rem;
`;

const CreateAccount = styled.button`
  font-size: 1.5rem;
  background-color: #bf941a;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  color: white;
  border-radius: 1.2rem;
  border: none;
  padding: 1.5rem;
  margin-right: -8rem;
  outline: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 2rem;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: url("./images/background.jpg");
  background-size: cover;
  position: relative;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>foodiez</Title>
      <ButtonWrapper>
        <Signin>sign in</Signin>
        <CreateAccount>Create Account</CreateAccount>
      </ButtonWrapper>
    </Wrapper>
  );
}
