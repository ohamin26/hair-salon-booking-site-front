import { MenuBottomSheet } from '@/components/BottomSheet/MenuBottomSheet';
import { Carousel } from '@/components/Carousel/Carousel';

export const MenuDetail = () => {
  return (
    <div className="max-w-default">
      <Carousel />
      <MenuBottomSheet />
    </div>
  );
};