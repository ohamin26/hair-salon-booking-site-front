import { CarouselSettings } from '@/constants/CarouselSetting';
import { useModalState } from '@/stores/useModalState';
import { useState } from 'react';
import Slider from 'react-slick';
import { reviewData } from '@/mocks/HairshopDetailData';
import { useLocation } from 'react-router-dom';

export default function Modal() {
  const { modalClose } = useModalState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const location = useLocation();
  const onClickClose = () => {
    modalClose();
  };
  const top = location.pathname.includes('/review') ? 'top-[0px]' : 'top-[-30px]';

  const onClickInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

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
    <div
      id="carousel-modal"
      aria-hidden="true"
      className={`${window.innerWidth > 700 && 'left-auto right-auto w-[640px] max-w-default'} bg-black fixed inset-0 top-[-30px] z-50 flex w-full min-w-default flex-col ${top}`}
    >
      <div className="bg-white relative z-10 flex w-full items-center p-[9px] shadow-md">
        <button
          onClick={onClickClose}
          type="button"
          className="mr-auto inline-flex h-6 w-6 items-center text-black-default"
          aria-label="모달 닫기"
        >
          <img src="/assets/images/icons/icon-close.svg" alt="모달 닫기" />
        </button>
        <span className="text-md mr-auto">
          포토리뷰 {currentSlide + 1} / {reviewData.length}
        </span>
      </div>

      <div className="relative flex-1">
        <Slider {...CarouselSettings} customPaging={customPaging} afterChange={afterChange} className="h-full">
          {/* 임시 데이터 any 타입으로 설정 */}
          {reviewData.map((review: any, index: any) => (
            <div key={index} className="relative h-screen text-lg">
              <img src={review.images} alt="헤어 스타일 이미지" className="mt-[13%] h-3/4 w-full object-cover" />
              <div className="from-black/70 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-transparent p-20">
                <button className="flex">
                  <h3 className="text-white mb-2 text-left font-bold">{review.title}</h3>
                  <p className="ml-2 text-right text-sm text-gray-300">{review.stylist}</p>
                </button>
                <div className="mt-1 flex items-center">
                  <span className="mr-2 text-gray-100">★ {review.rating}</span>
                  <span className="text-gray-300">{review.reviewRating.toFixed(1)}</span>
                </div>
                <p onClick={onClickInfo} className="mt-1 text-base text-gray-200">
                  {isInfoOpen
                    ? review.content
                    : `${review.content.slice(0, 50)} ${review.content.length > 50 ? '...' : ''}`}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
