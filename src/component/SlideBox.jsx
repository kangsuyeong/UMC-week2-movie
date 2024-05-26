import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import { Col, Row } from "react-bootstrap";
import Profile from "./Profile";

const ProfileList = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px; */
`;

const Styled_Slide = styled(Slider)`
  .slick-list {
    //얘로 크기조정 했음
    /* color: black; */
    /* width: 300px;
    height: 300px; */
  }
  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 35px;
    color: white;
    opacity: 0.3;
  }
`;

const SlideBox = ({ credits }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <Styled_Slide {...settings}>
      {credits && <Profile credits={credits.crew[0]} />}
      {credits &&
        credits.cast.slice(0, 11).map((item) => <Profile credits={item} />)}
    </Styled_Slide>
  );
};

export default SlideBox;
