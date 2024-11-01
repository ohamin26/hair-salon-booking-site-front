import { CustomImg } from '@/components/Image/CustomImg';
import ReviewModal from '@/components/Modal/ReviewModal';
import { useReviewModalState } from '@/stores/useModalState';
const photos = [
  { id: 1, src: 'https://picsum.photos/320/320' },
  { id: 2, src: 'https://picsum.photos/320/320' },
  { id: 3, src: 'https://picsum.photos/320/320' },
  { id: 4, src: 'https://picsum.photos/320/320' },
  { id: 5, src: 'https://picsum.photos/320/320' },
  { id: 6, src: 'https://picsum.photos/320/320' },
  { id: 7, src: 'https://picsum.photos/320/320' },
  { id: 8, src: 'https://picsum.photos/320/320' },
  { id: 9, src: 'https://picsum.photos/320/320' },
  { id: 10, src: 'https://picsum.photos/320/320' },
  { id: 11, src: 'https://picsum.photos/320/320' },
  { id: 12, src: 'https://picsum.photos/320/320' },
  { id: 13, src: 'https://picsum.photos/320/320' },
];

export default function ReviewPhotoGrid() {
  const { isReviewModalOpen, reviewModalOpen } = useReviewModalState();
  const onClickImg = () => {
    reviewModalOpen();
  };
  return (
    <div className="grid grid-cols-3 gap-[1px] p-2">
      {photos.map((photo) => (
        <button onClick={onClickImg} key={photo.id} className="h-full w-full">
          <CustomImg src={photo.src} addClassName="h-full w-full object-cover" height={''} width={''} />
        </button>
      ))}
      {isReviewModalOpen && <ReviewModal />}
    </div>
  );
}
