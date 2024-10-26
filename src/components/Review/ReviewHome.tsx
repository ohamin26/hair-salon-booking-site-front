import { Link } from 'react-router-dom';
import { CustomButton } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import { ReviewGrid } from './ReviewGrid';
import { ReviewList } from './ReviewList';
import { reviewData } from '@/mocks/HairshopDetailData';

export const ReviewHome = () => {
  return (
    <div className="max-w-default p-4">
      <Paragraph text="예약고객 리뷰 251" />
      <ReviewGrid />
      <ReviewList reviews={reviewData} />
      <Link to={'./review'} className="flex w-full items-center justify-center">
        <CustomButton text={'리뷰 전체보기'} onClick={() => {}} />
      </Link>
    </div>
  );
};
