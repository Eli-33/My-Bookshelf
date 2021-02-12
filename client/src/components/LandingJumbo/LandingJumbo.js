import React from "react";
import Slider from "react-slick";
import "./style.css";

function Carrousel() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,

    };
    return (
      <div
        className="carrouel_wrapper"
        style={{ height: `700px`, overflow: "hidden" }}
      >
        <Slider {...settings}>
          <div>
            <div
              className="carrouel_image1"
            />
          </div>
          <div>
            <div
              className="carrouel_image2"
            />
          </div>
          <div>
            <div
              className="carrouel_image3"
            />
          </div>
        </Slider>
      </div>
    );
  }
  
  export default Carrousel;