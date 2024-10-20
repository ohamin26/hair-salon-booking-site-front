export const getSnapPoint = (scrollDelta: number, screenWidth: number) => {
  if (screenWidth < 600) {
    if (scrollDelta < 50) return 2.5;
    if (scrollDelta < 100) return 2.1;
    if (scrollDelta < 150) return 1.7;
    if (scrollDelta < 200) return 1.3;

    return 1;
  } else if (screenWidth < 1200) {
    if (scrollDelta < 50) return 2.05;
    if (scrollDelta < 100) return 1.5;
    if (scrollDelta < 150) return 1.3;
    if (scrollDelta < 200) return 1.2;
    return 1;
  } else {
    if (scrollDelta < 50) return 1.5;
    if (scrollDelta < 100) return 1.4;
    if (scrollDelta < 150) return 1.3;
    if (scrollDelta < 200) return 1.2;
    return 1;
  }
};
