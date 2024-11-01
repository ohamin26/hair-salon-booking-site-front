import { useReviewModalState } from '@/stores/useModalState';
import { CustomImg } from '../Image/CustomImg';
import { Link, useParams } from 'react-router-dom';

const images = [
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
  'https://picsum.photos/320/320',
];

export const ReviewGrid = (/*{ images }*/) => {
  const { reviewModalOpen } = useReviewModalState();
  const onClickImg = () => {
    reviewModalOpen();
  };
  const { id } = useParams<{ id: string }>();
  return (
    <div className="grid grid-cols-4 gap-[1px] border-b border-b-gray-50 py-3">
      {images.slice(0, 7).map((image, index) => (
        <button onClick={onClickImg}>
          <CustomImg key={index} src={image} addClassName="h-auto w-full object-cover" height={''} width={''} />
        </button>
      ))}
      <Link to={`/${id}/review/photo-reviews`} className="relative overflow-hidden bg-gray-200">
        <CustomImg src={images[6]} addClassName="h-auto w-full object-cover opacity-90" height={''} width={''} />
        <div className="bg-black absolute inset-0 flex items-center justify-center bg-opacity-50 text-base font-bold text-white-default">
          +더보기
        </div>
      </Link>
    </div>
  );
};
