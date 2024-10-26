import { HairshopDetail } from '@/components/Container/HairshopDetail';
import { DetailHeader } from '@/components/Hearder/DetailHeader';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ReviewGrid } from '@/components/Review/ReviewGrid';
import { ReviewList } from '@/components/Review/ReviewList';
import { reviewData } from '@/mocks/HairshopDetailData';

const rating = 4.9;

export default function DetailReview() {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <HairshopDetail>
      <DetailHeader />
      <div className="flex flex-col items-center justify-center py-10">
        <span className="text-5xl">{rating.toFixed(1)}</span>
        <div className="flex space-x-1 py-4">
          {[...Array(fullStars)].map((_, index) => (
            <img key={`full-${index}`} src="/assets/images/icons/icon-star-full.svg" alt="Full star" />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <img key={`empty-${index}`} src="/assets/images/icons/icon-star-empty.svg" alt="Empty star" />
          ))}
        </div>
      </div>
      <div className="border-t-[6px] border-t-gray-50 p-4">
        <Paragraph text="예약고객 리뷰" />
        <div className="flex flex-col py-5">
          <span className="text-[15px] font-bold">리뷰사진 251</span>
          <ReviewGrid />
        </div>
        <ReviewList reviews={reviewData} />
      </div>
    </HairshopDetail>
  );
}
