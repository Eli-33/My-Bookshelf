import React from "react";
import Slider from "react-slick";
import "./style.css";
// import slide_one from "../../images/Creative_Wallpaper_Stack_of_books_on_the_bench_082401_.jpg";
// import slide_two from "../../images/book-background-thumbnail.jpg";
// import slide_three from "../../images/CYOA.jpg";


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
        style={{ height: `1000px`, overflow: "hidden" }}
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