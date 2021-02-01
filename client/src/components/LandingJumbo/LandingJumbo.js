import React from "react";
import Slider from "react-slick";

import slide_one from "../assets/images/book.jpg";
import slide_two from "../assets/images/bookstock.jpg";
import slide_three from "../assets/images/images.jpg";


function Carrousel() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div
        className="carrouel_wrapper"
        style={{ height: `${window.innerHeight}px`, overflow: "hidden" }}
      >
        <Slider {...settings}>
          <div>
            <div
              className="carrouel_image"
              style={{
                background: `url(${slide_one})`,
                height: `${window.innerHeight}px`,
              }}
            />
          </div>
          <div>
            <div
              className="carrouel_image"
              style={{
                background: `url(${slide_two})`,
                height: `${window.innerHeight}px`,
              }}
            />
          </div>
          <div>
            <div
              className="carrouel_image"
              style={{
                background: `url(${slide_three})`,
                height: `${window.innerHeight}px`,
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
  
  export default Carrousel;