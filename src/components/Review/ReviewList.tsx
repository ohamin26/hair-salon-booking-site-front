import { ReviewItem } from './ReviewItem';

interface ReviewListProps {
  reviews: ReviewItemProps[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewItem key={index} {...review} />
      ))}
    </div>
  );
};
