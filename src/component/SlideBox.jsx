import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import Profile from "./Profile";
import { Col, Row } from "react-bootstrap";

const Styled_Slide = styled(Slider)`
  .slick-list {
    //얘로 크기조정 했음
    background-color: #f0f9ff;
    color: black;
  }
  .slick-prev,
  .slick-next {
    border: 1px solid blue;
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev:before,
  .slick-next:before {
    /* font-size: 50px; */
    color: red;
    /* opacity: 0.3; */
  }
`;

const SlideBox = ({ credits }) => {
  console.log("credtis", credits);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Styled_Slide {...settings}>
      <div className="container1">
        <div class="item color1">Item1</div>
        <div class="item color2">Item2</div>
        <div class="item color3">Item3</div>
        <div class="item color4">Item4</div>
        <div class="item color5">Item5</div>
        <div class="item color1">Item6</div>
        <div class="item color2">Item7</div>
        <div class="item color3">Item8</div>
        <div class="item color4">Item9</div>
        <div class="item color5">Item10</div>
      </div>
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Styled_Slide>
  );
};

export default SlideBox;
