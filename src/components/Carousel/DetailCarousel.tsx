import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useState } from 'react';
import { CustomImg } from '../Image/CustomImg';
import { CarouselSettings } from '@/constants/CarouselSetting';

export const DetailCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgWidth, imgHeight] = ['640', '380'];
  const customPaging = (i: number) => {
    return (
      <div
        className={`absolute bottom-[45px] h-[1px] w-[31px] cursor-pointer ${i === currentSlide ? 'bg-white-default' : 'bg-gray-200'}`}
      />
    );
  };
  const afterChange = (current: number) => {
    setCurrentSlide(current);
  };
  return (
    <Slider {...CarouselSettings} customPaging={customPaging} afterChange={afterChange}>
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
      <CustomImg src="https://picsum.photos/320/320" height={imgHeight} width={imgWidth} />
    </Slider>
  );
};
