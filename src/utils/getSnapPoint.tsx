export const getSnapPoint = (scrollDelta: number, screenWidth: number) => {
  if (screenWidth < 600) {
    if (scrollDelta < 50) return 1.93;
    if (scrollDelta < 100) return 1.7;
    if (scrollDelta < 150) return 1.5;
    if (scrollDelta < 200) return 1.2;

    return 1.035;
  } else if (screenWidth < 700) {
    if (scrollDelta < 50) return 1.65;
    if (scrollDelta < 100) return 1.4;
    if (scrollDelta < 150) return 1.3;
    if (scrollDelta < 200) return 1.2;
    return 1.035;
  } else if (screenWidth < 800) {
    if (scrollDelta < 50) return 2.3;
    if (scrollDelta < 100) return 1.5;
    if (scrollDelta < 150) return 1.35;
    if (scrollDelta < 200) return 1.2;
    return 1.045;
  } else if (screenWidth < 900) {
    if (scrollDelta < 50) return 1.55;
    if (scrollDelta < 100) return 1.4;
    if (scrollDelta < 150) return 1.3;
    if (scrollDelta < 200) return 1.2;
    return 1.035;
  } else {
    if (scrollDelta < 50) return 1.75;
    if (scrollDelta < 100) return 1.5;
    if (scrollDelta < 150) return 1.3;
    if (scrollDelta < 200) return 1.2;
    return 1.035;
  }
};
