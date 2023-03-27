const cleanSet = (set, startString) => {
  const arr = [];
  if (startString && typeof startString === 'string') {
    for (const item of set) {
      if (item && item.startsWith(startString)) arr.push(item.slice(startString.length));
    }
  }
  return arr.join('-');
};

export default cleanSet;
