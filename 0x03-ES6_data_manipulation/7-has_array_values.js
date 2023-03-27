const hasValuesFromArray = (set, array) => {
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
