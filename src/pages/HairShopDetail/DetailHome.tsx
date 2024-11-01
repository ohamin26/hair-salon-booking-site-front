import { Container } from '@/components/BottomSheet/HairshopDetail/Home/Container';
import { DetailCarousel } from '@/components/Carousel/DetailCarousel';
import { HairshopDetail } from '@/components/Container/HairshopDetail';
import DetailMapModal from '@/components/Modal/DetailMapModal';
import ReviewModal from '@/components/Modal/ReviewModal';
import { useMapModalState, useReviewModalState } from '@/stores/useModalState';
export const DetailHome = () => {
  const { isMapModalOpen } = useMapModalState();
  const { isReviewModalOpen } = useReviewModalState();
  return (
    <HairshopDetail>
      <DetailCarousel />
      <Container />
      {isReviewModalOpen && <ReviewModal />}
      {isMapModalOpen && <DetailMapModal />}
    </HairshopDetail>
  );
};
