import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useSpring } from '@react-spring/web';
import '@/styles/bottom-sheet-style.css';
import { DetailHeader } from '@/components/Hearder/DetailHeader';
import { Content } from './Content';
import { getSnapPoint } from '@/utils/getSnapPoint';
import { PickMenu } from '@/components/PickMenu/PickMenu';
import { DesingerHome } from '@/components/Desinger/DesingerHome';
import { ReviewHome } from '@/components/Review/ReviewHome';
import ReservationButton from '@/components/Button/ReservationButton';
import { useMapModalState, useReviewModalState } from '@/stores/useModalState';

export const Container = () => {
  const [scrollDelta, setScrollDelta] = useState(0);
  const [springs, api] = useSpring(() => ({
    snapPoint: 1.75,
    config: { tension: 170, friction: 26 },
  }));
  const [isActiveScroll, setIsActiveScroll] = useState(false);
  const { isReviewModalOpen } = useReviewModalState();
  const { isMapModalOpen } = useMapModalState();
  const handleScroll = (event: WheelEvent) => {
    setScrollDelta((prevDelta) => prevDelta + event.deltaY);
    if (window.innerHeight / springs.snapPoint.get() >= 698 || window.innerWidth < 600) {
      setIsActiveScroll(true);
    } else {
      setIsActiveScroll(false);
    }
    if (scrollDelta > 1500) setScrollDelta(1500);
    if (scrollDelta < 0) setScrollDelta(0);
  };

  useEffect(() => {
    const handleSnapPoint = () => {
      const screenWidth = window.innerWidth;
      const snapPoint = getSnapPoint(scrollDelta, screenWidth);
      isReviewModalOpen || isMapModalOpen ? api.start({ snapPoint: 1.035 }) : api.start({ snapPoint });
    };

    window.addEventListener('resize', handleSnapPoint);
    window.addEventListener('wheel', handleScroll);

    handleSnapPoint();

    return () => {
      window.removeEventListener('resize', handleSnapPoint);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollDelta, api]);

  return (
    <BottomSheet
      open
      snapPoints={({ maxHeight }) => {
        return [maxHeight / springs.snapPoint.get()];
      }}
      blocking={false}
      initialFocusRef={false}
      expandOnContentDrag={false}
    >
      <div className="overflow-hidden pb-24">
        <div>{'화면 보호기'}</div>
        <div className="fixed top-3 z-10">
          <DetailHeader />
        </div>
        <div className={`${!isActiveScroll && 'fixed w-full'}`}>
          <Content />
          <PickMenu />
          <DesingerHome />
          <ReviewHome />
        </div>
        <ReservationButton />
      </div>
    </BottomSheet>
  );
};
