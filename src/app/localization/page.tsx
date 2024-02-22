'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={"/mechanik1.jpg"} alt={""} className="object-cover h-[50vh] w-full"></img>
      </div>
      <div>
        <img src={"/mechanik2.jpg"} alt={""} className="object-cover h-[50vh] w-full"></img>
      </div>
      <div>
        <img src={"/mechanik2.jpg"} alt={""} className="object-cover h-[50vh] w-full"></img>
      </div>
      <div>
        <img src={"/mechanik2.jpg"} alt={""} className="object-cover h-[50vh] w-full"></img>
      </div>
      <div>
        <img src={"/mechanik2.jpg"} alt={""} className="object-cover h-[50vh] w-full"></img>
      </div>
      <div>
        <img src={"/mechanik2.jpg"} alt={""} className="object-cover h-[50vh] w-full"></img>
      </div>
    </Slider>
  );
}