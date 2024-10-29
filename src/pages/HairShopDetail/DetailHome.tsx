import { Container } from '@/components/BottomSheet/HairshopDetail/Home/Container';
import { DetailCarousel } from '@/components/Carousel/DetailCarousel';
import { HairshopDetail } from '@/components/Container/HairshopDetail';
export const DetailHome = () => {
  return (
    <HairshopDetail>
      <DetailCarousel />
      <Container />
    </HairshopDetail>
  );
};
