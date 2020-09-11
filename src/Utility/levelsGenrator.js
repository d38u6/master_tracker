export const generateLevels = () => {
  let f = (t) => {
    const k = -0.0006;
    const Lmax = 444;

    return Number((Lmax * (1 - Math.pow(Math.E, k * t))).toFixed(0));
  };

  let levels = [];
  let currentLevel = 0;
  let hours = 0;

  while (currentLevel < 443) {
    hours += 1;
    const level = f(hours);
    if (level > currentLevel) {
      levels.push(hours);
      currentLevel = level;
    }
  }
  levels.push(10000);
  return levels;
};
