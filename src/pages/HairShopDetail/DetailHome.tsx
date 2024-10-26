import { Carousel } from '@/components/Carousel/Carousel';
import { Container } from '@/components/BottomSheet/HairshopDetail/Home/Container';
import { HairshopDetail } from '../../components/Container/HairshopDetail';
export const DetailHome = () => {
  return (
    <HairshopDetail>
      <Carousel />
      <Container />
    </HairshopDetail>
  );
};
