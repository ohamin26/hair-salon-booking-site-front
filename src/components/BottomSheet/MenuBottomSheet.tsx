import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useSpring } from '@react-spring/web';
import '@/styles/bottom-sheet-style.css';
import { MenuHeader } from '@/components/Hearder/MemuHeader';
import { useParams } from 'react-router-dom';

export const MenuBottomSheet = () => {
  const { id } = useParams<{ id: string }>();
  const [scrollDelta, setScrollDelta] = useState(0);

  const [springs, api] = useSpring(() => ({
    snapPoint: 1.7,
    config: { tension: 170, friction: 26 },
  }));

  const handleScroll = (event: WheelEvent) => {
    setScrollDelta((prevDelta) => prevDelta + event.deltaY);
    if (scrollDelta > 300) setScrollDelta(300);
    if (scrollDelta < -300) setScrollDelta(-300);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    if (scrollDelta >= 100 && scrollDelta < 200) {
      api.start({ snapPoint: 1.5 });
    } else if (scrollDelta >= 200 && scrollDelta < 300) {
      api.start({ snapPoint: 1.1 });
    } else if (scrollDelta >= 300) {
      api.start({ snapPoint: 1 });
    } else if (scrollDelta < 100) {
      api.start({ snapPoint: 1.7 });
    }

    return () => {
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
      <MenuHeader reviewCount={10} id={id} />
    </BottomSheet>
  );
};
