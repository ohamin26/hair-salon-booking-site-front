import { CarouselSettings } from '@/constants/CarouselSetting';
import { useState } from 'react';
import Slider from 'react-slick';
import { reviewData } from '@/mocks/HairshopDetailData';
import { useReviewModalState } from '@/stores/useModalState';
import ModalNavigation from './ModalNavigation';
import ModalContainer from './ModalContainer';

export default function ReviewModal() {
  const { reviewModalClose } = useReviewModalState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const onClickClose = () => {
    reviewModalClose();
  };

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
    <ModalContainer>
      <ModalNavigation
        onClick={onClickClose}
        src="/assets/images/icons/icon-close.svg"
        text={`포토리뷰 ${currentSlide + 1} / ${reviewData.length}`}
      />
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
    </ModalContainer>
  );
}
