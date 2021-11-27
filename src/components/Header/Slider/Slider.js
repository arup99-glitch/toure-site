import React from "react";
import { Carousel } from "react-bootstrap";

/* ths is the carousel, which is used in home component  */
const Slider = () => {
  return (
    <div className="w-100 h-25">
      <Carousel className="bg-transparent mx-auto">
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsc1998-1574720123.jpg?crop=1.00xw:0.753xh;0.00160xw,0.122xh&resize=480:*"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://thelegitimatenews.com/wp-content/uploads/2018/11/winter-vacation.jpg"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/newskijoring2-1570477083.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://www.eduvision.edu.pk/edu_news/images/winter-vacation.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://luckybansko.com/wp-content/uploads/2021/01/2021-01-28_11h27_19-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qu0jl8Fdu4uqRW9wN_Y6upaFflAL7NVPJA&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=900&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F09%2F24%2Fbeaver-creek-colorado-CHEAPWINTER0921.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://shikshanews.com/wp-content/uploads/winter-vacation-merano-hotel.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
