const cleanSet = (set, startString) => {
  if (startString === '') return '';
  const str = [];
  for (const item of set) {
    if (item.startsWith(startString)) str.push(item.slice(startString.length));
  }
  return str.join('-');
};

export default cleanSet;
