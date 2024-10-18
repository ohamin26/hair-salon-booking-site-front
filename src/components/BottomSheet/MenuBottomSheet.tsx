import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import '@/styles/bottom-sheet-style.css';
import { MenuHeader } from '@/components/Hearder/MemuHeader';
import { useParams } from 'react-router-dom';

export const MenuBottomSheet = () => {
  const { id } = useParams<{ id: string }>();
  const [snapPoint, setSnapPoint] = useState(1.7);
  const [scrollDelta, setScrollDelta] = useState(0);

  const handleScroll = (event: WheelEvent) => {
    setScrollDelta((prevDelta) => prevDelta + event.deltaY);
    if (scrollDelta > 300) setScrollDelta(300);
    if (scrollDelta < -300) setScrollDelta(-300);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    if (scrollDelta >= 100 && scrollDelta < 200) {
      setSnapPoint(1.5);
    } else if (scrollDelta >= 200 && scrollDelta < 300) {
      setSnapPoint(1.1);
    } else if (scrollDelta >= 300) {
      setSnapPoint(1);
    } else if (scrollDelta < 100) {
      setSnapPoint(1.7);
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollDelta]);

  return (
    <BottomSheet
      open
      snapPoints={({ maxHeight }) => {
        return [maxHeight / snapPoint];
      }}
      blocking={false}
      initialFocusRef={false}
      expandOnContentDrag={false}
    >
      <MenuHeader reviewCount={10} id={id} />
    </BottomSheet>
  );
};
