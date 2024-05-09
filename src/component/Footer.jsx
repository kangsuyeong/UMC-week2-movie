import React from "react";
import { Container } from "react-bootstrap";
import { styled } from "styled-components";

const Background = styled.div`
  border-top: 1px solid rgb(33, 33, 33);
  background-color: black;
  height: 80px;
  color: #6e6e6e;
`;

const CopyText = styled.div`
  display: flex;
  padding: 10px;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <Background>
      <Container>
        <CopyText>Copyright © 2024 UMC All rights reserved.</CopyText>
      </Container>
    </Background>
  );
};

export default Footer;
