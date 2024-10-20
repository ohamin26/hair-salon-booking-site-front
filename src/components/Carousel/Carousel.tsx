import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';
import { PrevArrow } from '@/components/Button/Carousel/PrevArrow';
import { NextArrow } from '@/components/Button/Carousel/NextArrow';
import { CustomImg } from '../Image/CustomImg';

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgWidth, imgHeight] = ['640', '380'];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i: number) => {
      return (
        <div
          className={`absolute bottom-10 h-[3px] w-[31px] cursor-pointer ${i === currentSlide ? 'bg-white-default' : 'bg-gray-300'}`}
        />
      );
    },
    afterChange: (current: number) => {
      setCurrentSlide(current);
    },
  };

  return (
    <Slider {...settings}>
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
    </Slider>
  );
};
