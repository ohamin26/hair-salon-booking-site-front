import { ReviewGrid } from '../Review/ReviewGrid';
import { ReviewList } from '../Review/ReviewList';
import { reviewData } from '@/mocks/HairshopDetailData';

export default function Review() {
  return (
    <div className="p-2">
      <ReviewGrid />
      <ReviewList reviews={reviewData} />
    </div>
  );
}
