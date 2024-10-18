import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import '@/styles/bottom-sheet-style.css';
import { MenuHeader } from '@/components/Hearder/MemuHeader';
import { useParams } from 'react-router-dom';

export const MenuBottomSheet = () => {
  const { id } = useParams<{ id: string }>();
  const [snapPoint, setSnapPoint] = useState(1.5);
  const [scrollDelta, setScrollDelta] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  const handleScroll = (event: WheelEvent) => {
    setScrollDelta((prevDelta) => prevDelta + event.deltaY);
    if (scrollDelta > 300) setScrollDelta(300);
    if (scrollDelta < -300) setScrollDelta(-300);
    if (event.deltaY > 0) {
      setScrollDirection('down');
    } else if (event.deltaY < 0) {
      setScrollDirection('up');
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    if (scrollDirection === 'down') {
      if (scrollDelta >= 100 && scrollDelta < 200) {
        setSnapPoint(1.3);
      } else if (scrollDelta >= 200 && scrollDelta < 300) {
        setSnapPoint(1.1);
      } else if (scrollDelta >= 300) {
        setSnapPoint(1);
      } else if (scrollDelta < 100) {
        setSnapPoint(1.5);
      }
    } else if (scrollDirection === 'up') {
      if (scrollDelta >= 100 && scrollDelta < 200) {
        setSnapPoint(1.3);
      } else if (scrollDelta >= 200 && scrollDelta < 300) {
        setSnapPoint(1.1);
      } else if (scrollDelta >= 300) {
        setSnapPoint(1);
      } else if (scrollDelta < 100) {
        setSnapPoint(1.5);
      }
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
