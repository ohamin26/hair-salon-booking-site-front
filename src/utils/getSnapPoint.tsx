export const getSnapPoint = (scrollDelta: number, screenWidth: number) => {
  const snapPoints = [
    { maxScreenWidth: 600, snapPoint: [1.93, 1.7, 1.5, 1.2, 1.04] },
    { maxScreenWidth: 700, snapPoint: [1.65, 1.4, 1.3, 1.2, 1.035] },
    { maxScreenWidth: 800, snapPoint: [1.8, 1.5, 1.35, 1.2, 1.035] },
    { maxScreenWidth: 900, snapPoint: [1.55, 1.4, 1.3, 1.2, 1.029] },
    { maxScreenWidth: 1550, snapPoint: [2.3, 1.7, 1.3, 1.2, 1.045] },
    { maxScreenWidth: 1600, snapPoint: [1.73, 1.5, 1.3, 1.2, 1.035] },
    { maxScreenWidth: 2000, snapPoint: [1.75, 1.5, 1.3, 1.2, 1.035] },
    { maxScreenWidth: Infinity, snapPoint: [2.3, 1.5, 1.3, 1.2, 1.045] },
  ];

  const scrollRanges = [50, 100, 150, 200];

  const snapPointData = snapPoints.find(({ maxScreenWidth }) => screenWidth < maxScreenWidth);
  const snapPoint = snapPointData?.snapPoint || [1.04];

  const index = scrollRanges.findIndex((item) => scrollDelta < item);
  return snapPoint[index === -1 ? snapPoint.length - 1 : index];
};
