import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useSpring } from '@react-spring/web';
import '@/styles/bottom-sheet-style.css';
import { MenuHeader } from '@/components/Hearder/MemuHeader';
import { useParams } from 'react-router-dom';
import { Content } from './Content';
import { getSnapPoint } from '@/utils/getSnapPoint';

export const Container = () => {
  const { id } = useParams<{ id: string }>();
  const [scrollDelta, setScrollDelta] = useState(0);
  const [springs, api] = useSpring(() => ({
    snapPoint: 1.7,
    config: { tension: 170, friction: 26 },
  }));
  const [isActiveScroll, setIsActiveScroll] = useState(false);

  const handleScroll = (event: WheelEvent) => {
    setScrollDelta((prevDelta) => prevDelta + event.deltaY);
    if (scrollDelta >= 300) setIsActiveScroll(true);
    else setIsActiveScroll(false);
    if (scrollDelta > 300) setScrollDelta(300);
    if (scrollDelta < 0) setScrollDelta(0);
  };

  useEffect(() => {
    const handleSnapPoint = () => {
      const screenWidth = window.innerWidth;
      const snapPoint = getSnapPoint(scrollDelta, screenWidth);
      api.start({ snapPoint });
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
      <div className="overflow-hidden">
        <div>{'화면 보호기'}</div>
        <div className="fixed top-3 z-10">
          <MenuHeader reviewCount={10} id={id} />
        </div>
        <div className={`${!isActiveScroll && 'fixed w-full'}`}>
          <Content />
        </div>
      </div>
    </BottomSheet>
  );
};
