import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class ImgSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        <Slider {...settings} class='mx-8'>
          
          <div className ='slider-item1 h-full w-8'>
            <button class='w-32 h-16 rounded-md bg-yellow-700 text-white mt-96 ml-8'>PROPZY CARE</button>
          </div>
          
          <div className="slider-item1 h-full w-full ">
          <button class='w-32 h-16 rounded-md bg-yellow-700 text-white mt-96 ml-8'>PROPZY CARE</button> 
          </div>
         
        </Slider>
      </div>
    );
  }
}