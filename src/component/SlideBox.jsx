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
  console.log("credits확인", credits.cast[0]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Styled_Slide {...settings}>
      {/* <ProfileList>
        {credits.cast.slice(0, 5).map((item, index) => (
          <Profile key={index} credits={item} />
        ))}
        <div>1</div>
        <div>2</div>
      </ProfileList> */}
      <div>
        <Row>
          {credits && (
            <Col lg={2}>
              <Profile credits={credits.crew[0]} />
            </Col>
          )}
          {credits &&
            credits.cast.slice(0, 5).map((item) => (
              <Col lg={2}>
                <Profile credits={item} />
              </Col>
            ))}
        </Row>
      </div>

      <div>
        <Row>
          {credits &&
            credits.cast.slice(6, 12).map((item) => (
              <Col lg={2}>
                <Profile credits={item} />
              </Col>
            ))}
        </Row>
      </div>
    </Styled_Slide>
  );
};

export default SlideBox;
